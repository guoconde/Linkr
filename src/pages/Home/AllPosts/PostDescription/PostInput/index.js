import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fireAlert } from "../../../../../utils/alerts";

import useApi from "../../../../../hooks/useApi";
import useAuth from "../../../../../hooks/useAuth";
import usePost from "../../../../../hooks/usePost";
import Input from "./style";

export default function PostInput({ postId, url, description, setShowAction, setEdit }) {
  const [descriptionReceived, setDescriptionReceived] = useState(description);
  const [isLoading, setIsLoading] = useState(false);
  const { auth, logout } = useAuth();
  const { reloadPage, setReloadPage } = usePost();
  const descriptionInputRef = useRef(null);
  const api = useApi();
  const navigate = useNavigate();

  const handleKeyDown = async (event) => {
    if (event.key === 'Enter') {
      setIsLoading(true);

      handleUpdatePost(postId, {
        url,
        description: descriptionReceived,
        originalDescription: description
      });
    }

    if (event.key === 'Escape') {
      setEdit(null);
      setShowAction(false);
    }
  }

  useEffect(() => {
    descriptionInputRef.current.focus();
  }, []);

  async function handleUpdatePost(postId, data) {
    const headers = { headers: { Authorization: `Bearer ${auth?.token}` } };

    try {
      await api.posts.updatePost(postId, data, headers);

      setEdit(null);
      setShowAction(false);
      setReloadPage(!reloadPage);
    } catch (error) {
      setIsLoading(false);

      if (error.response.status === 401) {
        await fireAlert(error.response.data);
        logout();
        return navigate("/");
      }

      if (error.response.status === 400) {
        await fireAlert(error.response.data);
        return;
      }

      fireAlert("Unable to edit the post! Try again!");
    }
  }

  return (
    <Input
      type={'text'}
      value={descriptionReceived}
      onChange={(e) => setDescriptionReceived(e.target.value)}
      onKeyDown={handleKeyDown}
      ref={descriptionInputRef}
      disabled={isLoading ? 1 : undefined}
    />
  );
}
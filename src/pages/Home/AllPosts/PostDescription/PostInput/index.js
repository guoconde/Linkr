import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fireAlert } from "../../../../../utils/alerts";
import PostParagraph from "../PostParagraph";
import useApi from "../../../../../hooks/useApi";
import useAuth from "../../../../../hooks/useAuth";
import Input from "./style";

export default function PostInput({ postId, url, description, setShowAction, setEdit, index }) {
  const [descriptionReceived, setDescriptionReceived] = useState(description);
  const [isLoading, setIsLoading] = useState(false);
  const descriptionInputRef = useRef(null);
  const api = useApi();
  const navigate = useNavigate();
  const { auth, logout } = useAuth();
  const handleKeyDown = async (event) => {
    if (event.key === 'Enter') {
      setEdit(null);
      setIsLoading(true);
      handleUpdatePost(postId, {
        url,
        description: descriptionReceived,
        originalDescription: description
      });
    }

    if (event.key === 'Escape') {
      setEdit(null);
      setShowAction(<PostParagraph description={description} index={index} />);
    }
  }

  useEffect(() => {
    descriptionInputRef.current.focus();
  }, []);

  async function handleUpdatePost(postId, data) {
    const headers = {
      headers: {
        Authorization: `Bearer ${auth?.token}`
      }
    }

    try {
      await api.posts.updatePost(postId, data, headers);

      setShowAction(<PostParagraph description={descriptionReceived} index={index} />);
    } catch (error) {
      if (error.response.status === 401) {
        await fireAlert(error.response.data);
        logout();
        return navigate("/");
      }

      alert("Unable to edit the post! Try again!");
      setIsLoading(false);
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
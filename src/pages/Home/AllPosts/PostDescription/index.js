import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { fireAlert } from "../../../../utils/alerts";
import useApi from "../../../../hooks/useApi";
import useAuth from "../../../../hooks/useAuth";
import styled from "styled-components";
import HighlightHashtag from "../HighlightHashtags/HighlightHashtag";

export default function PostDescription({ postId, postEditedId, url, edit, setEdit, description }) {
  const [showAction, setShowAction] = useState(<PostParagraph description={description} />);

  useEffect(() => {
    if (edit && (postId === postEditedId)) {
      setShowAction(
        <PostInput
          postId={postId}
          url={url}
          setEdit={setEdit}
          description={description}
          setShowAction={setShowAction}
        />
      );
    }

    if (!edit && (postId === postEditedId)) {
      setShowAction(<PostParagraph description={description} />);
    }
  }, [edit, description, setEdit, postId, postEditedId, url])

  return (
    showAction
  );
}

function PostParagraph({ description }) {
  return (
    <p>
      <HighlightHashtag>
        {description}
      </HighlightHashtag>
    </p>
  );
}

function PostInput({ postId, url, description, setShowAction, setEdit }) {
  const [descriptionReceived, setDescriptionReceived] = useState(description);
  const [isLoading, setIsLoading] = useState(false);
  const descriptionInputRef = useRef(null);
  const api = useApi();
  const { auth, logout } = useAuth();
  const navigate = useNavigate()
  const handleKeyDown = async (event) => {
    if (event.key === 'Enter') {
      setEdit(false);
      setIsLoading(true);
      /* await new Promise(resolve => setTimeout(resolve, 3000)); */
      handleUpdatePost(postId, { url, description: descriptionReceived });
    }

    if (event.key === 'Escape') {
      setEdit(false);
      setShowAction(<PostParagraph description={description} />);
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

      setShowAction(<PostParagraph description={descriptionReceived} />);
    } catch (error) {
      if(error.response.status === 401) {
        await fireAlert(error.response.data);
        logout()
        return navigate("/")
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

const Input = styled.input`
  width: 100%;
  height: 44px;

  pointer-events: ${(props) => props.disabled ? "none" : "all"};

  padding: 10px;

  background-color: ${(props) => props.disabled ? "#F2F2F2" : "#FFFFFF"};
  border: none;
  border-radius: 7px;

  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;

  color: ${(props) => props.disabled ? "#AFAFAF" : "#4C4C4C"};
`;
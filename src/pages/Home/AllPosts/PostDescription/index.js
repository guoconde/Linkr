import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import HighlightHashtag from "../HighlightHashtags/HighlightHashtag";

export default function PostDescription({ edit, setEdit, description, authUserId, elUserId }) {
  const [showAction, setShowAction] = useState(<PostParagraph description={description} />);

  useEffect(() => {
    if (edit && (authUserId === elUserId)) {
      setShowAction(
      <PostInput 
        setEdit={setEdit}
        description={description} 
        setShowAction={setShowAction}
      />)
    }

    if (!edit && (authUserId === elUserId)) {
      setShowAction(<PostParagraph description={description} />)
    }
  }, [edit, authUserId, elUserId, description, setEdit])

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

function PostInput({ description, setShowAction, setEdit }) {
  const [descriptionReceived, setDescriptionReceived] = useState(description);
  const descriptionInputRef = useRef(null);
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      console.log('do validate key Enter');
      setEdit(false);
    }

    if (event.key === 'Escape') {
      console.log('do validate key Escape');
      setEdit(false);
      setShowAction(<PostParagraph description={description} />);
    }
  }

  useEffect(() => {
    descriptionInputRef.current.focus();
  }, []);

  return (
    <Input
      type={'text'}
      value={descriptionReceived}
      onChange={(e) => setDescriptionReceived(e.target.value)}
      onKeyDown={handleKeyDown}
      ref={descriptionInputRef}
    />
  );
}

const Input = styled.input`
  width: 100%;
  height: 44px;

  padding: 10px;

  background: #FFFFFF;
  border: none;
  border-radius: 7px;

  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;

  color: #4C4C4C;
`;
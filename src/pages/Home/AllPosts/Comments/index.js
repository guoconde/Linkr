import { useEffect, useRef, useState } from "react";
import ProfilePicture from "../../../../components/ProfilePicture";
import { FiSend } from 'react-icons/fi';
import { ContentComments, ContainerCommentInput, CommentInput } from "./style";

export default function Comments({ comments }) {
  const [commentInput, setCommentInput] = useState("");
  const commentInputRef = useRef(null);
  const handleKeyDown = async (event) => {
    if (event.key === 'Enter') {
      alert("Enviar comentário!");
    }
  }

  useEffect(() => {
    commentInputRef.current.focus();
  }, []);

  return (
    <ContentComments>

      {true &&
        <div className="no-comments">
          <p className="no-comments-message">Be the first to comment on this post!</p>
          <hr className="no-comments-divider"/>
        </div>
      }

      <ContainerCommentInput>
        <ProfilePicture sizeControl={true} />
        <CommentInput
          type="text"
          placeholder="write a comment..."
          value={commentInput}
          onChange={(e) => setCommentInput(e.target.value)}
          onKeyDown={handleKeyDown}
          ref={commentInputRef}
        />
        <FiSend className="fisend-icon" size={20} color="white" />
      </ContainerCommentInput>
    </ContentComments>
  );
}
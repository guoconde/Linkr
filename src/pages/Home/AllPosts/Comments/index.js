import { useEffect, useRef, useState } from "react";
import ProfilePicture from "../../../../components/ProfilePicture";
import useApi from "../../../../hooks/useApi";
import useContexts from "../../../../hooks/useContexts";
import CommentLine from "./CommentLine";
import { FiSend } from 'react-icons/fi';
import { fireAlert } from "../../../../utils/alerts";
import {
  ContentComments,
  ContainerCommentInput,
  CommentInput,
  ContainerCommentInputExtends,
  CommentInputExtends,
  LoadCommentsContainer
} from "./style";

export default function Comments({
  postId,
  setComments,
  loadPostComments,
  setLoadPostComments
}) {

  const api = useApi();
  const contexts = useContexts();
  const { auth } = contexts.auth;
  const { reloadPage, setReloadPage } = contexts.post
  const [commentInput, setCommentInput] = useState("");
  const commentInputRef = useRef(null);

  const handleKeyDown = async (event) => {
    if (event.key === 'Enter') {
      handleCreateComment(postId, commentInput);
      handleListComments(postId);
      setCommentInput("");
      setReloadPage(!reloadPage);
    }

    if (event.key === 'Escape') {
      setComments(null);
    }
  }

  function handleFiSend() {
    handleCreateComment(postId, commentInput);
    handleListComments(postId);
    setCommentInput("");
    setReloadPage(!reloadPage);
  }

  async function handleCreateComment(postId, comment) {
    try {
      const headers = { headers: { Authorization: `Bearer ${auth?.token}` } };

      console.log({ userId: auth.userId, postId, comment });
      await api.comments.insertComment({ userId: auth.userId, postId, comment }, headers);
    } catch (error) {
      await fireAlert(error.response.data);
      return;
    }
  }

  async function handleListComments(postId) {
    try {
      const headers = { headers: { Authorization: `Bearer ${auth?.token}` } };

      await new Promise(resolve => setTimeout(resolve, 500));
      const { data } = await api.comments.listComments(postId, headers);

      console.log(data);
      setLoadPostComments(data);
    } catch (error) {
      await fireAlert(error.response.data);
      return;
    }
  }

  useEffect(() => {
    commentInputRef.current.focus();
  }, []);

  const loadPostCommentsReader = loadPostComments.map((comment) => {
    return (
      <CommentLine
        key={comment.id}
        userId={comment.userId}
        authorId={comment.authorId}
        followedId={comment.followedId}
        name={comment.name}
        photo={comment.photo}
        comment={comment.comment}
      />
    );
  })

  return (
    <ContentComments>

      {!loadPostCommentsReader.length ?
        <>
          <div className="no-comments">
            <p className="no-comments-message">Be the first to comment on this post!</p>
            <hr className="no-comments-divider" />
          </div>

          <ContainerCommentInput>
            <ProfilePicture sizeControl={true} />
            <CommentInput
              type="text"
              placeholder="write a comment..."
              value={commentInput}
              onChange={(e) => setCommentInput(e.target.value)}
              onKeyDown={handleKeyDown}
              ref={commentInputRef}
              positionControl={loadPostCommentsReader.length}
            />
            <FiSend 
              className="fisend-icon" 
              size={20} 
              color="white" 
              onClick={() => handleFiSend()}
            />
          </ContainerCommentInput>
        </>
        :
        <>
          <LoadCommentsContainer>
            {loadPostCommentsReader}
          </LoadCommentsContainer>
          <ContainerCommentInputExtends>
            <ProfilePicture sizeControl={true} />
            <CommentInputExtends
              type="text"
              placeholder="write a comment..."
              value={commentInput}
              onChange={(e) => setCommentInput(e.target.value)}
              onKeyDown={handleKeyDown}
              ref={commentInputRef}
              positionControl={loadPostCommentsReader.length}
            />
            <FiSend 
              className="fisend-icon-extends" 
              size={20} 
              color="white" 
              onClick={() => handleFiSend()}
            />
          </ContainerCommentInputExtends>
        </>
      }
    </ContentComments>
  );
}
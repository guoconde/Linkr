import { useEffect, useRef, useState } from "react";
import ProfilePicture from "../../../../../components/ProfilePicture";
import useApi from "../../../../../hooks/useApi";
import useContexts from "../../../../../hooks/useContexts";
import CommentLine from "./CommentLine";
import { FiSend } from 'react-icons/fi';
import { fireAlert } from "../../../../../utils/alerts";
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
  const { reloadPage, setReloadPage } = contexts.post;
  const [commentInput, setCommentInput] = useState("");
  const commentInputRef = useRef(null);
  const commentScroll = useRef(null);
  const [disableInput, setDisableInput] = useState(false);

  const handleKeyDown = async (event) => {
    if (event.key === 'Enter' && !disableInput) {
      handleFiSend();
    }

    if (event.key === 'Escape') {
      setComments(null);
    }
  }

  async function handleFiSend() {
    setDisableInput(true);
    await handleCreateComment(postId, commentInput);
    await handleListComments(postId);

    setCommentInput("");
    setReloadPage(!reloadPage);
    setDisableInput(false);
    commentInputRef.current.focus();
  
    commentScroll.current.scrollTo({
      top: commentScroll.current.scrollHeight,
      left: 0,
      behavior: "smooth"
    });
  }

  async function handleCreateComment(postId, comment) {
    try {
      const headers = { headers: { Authorization: `Bearer ${auth?.token}` } };

      await api.comments.insertComment({ userId: auth.userId, postId, comment }, headers);
    } catch (error) {
      await fireAlert(error.response.data);
      return;
    }
  }

  async function handleListComments(postId) {
    try {
      const headers = { headers: { Authorization: `Bearer ${auth?.token}` } };

      const { data } = await api.comments.listComments(postId, headers);

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
              disabled={disableInput}
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
          <LoadCommentsContainer ref={commentScroll}>
            {loadPostCommentsReader}
          </LoadCommentsContainer>
          <ContainerCommentInputExtends>
            <ProfilePicture sizeControl={true} />
            <CommentInputExtends
              type="text"
              placeholder="write a comment..."
              value={commentInput}
              onChange={(e) => setCommentInput(e.target.value)}
              disabled={disableInput}
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
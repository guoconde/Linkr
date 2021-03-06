import { AiOutlineComment } from "react-icons/ai";
import { CommentsContainer, CommentsCounter } from "./style";
import { fireAlert } from "../../../../../../utils/alerts";
import useApi from "../../../../../../hooks/useApi";
import useContexts from "../../../../../../hooks/useContexts";

export default function CommentIcon({ postIndex, postId, handleComments, setLoadPostComments, commentsCount }) {
  const api = useApi();
  const contexts = useContexts();
  const { auth } = contexts.auth;

  async function handleListComments(postId, postIndex) {
    try {
      const headers = { headers: { Authorization: `Bearer ${auth?.token}` } };
      const { data } = await api.comments.listComments(postId, headers);

      setLoadPostComments(data);
      handleComments(postIndex);
    } catch (error) {
      await fireAlert(error.response.data);
      return;
    }
  }

  return(
    <CommentsContainer onClick={() => handleListComments(postId, postIndex)}>
      <AiOutlineComment className="comment-icon" size={25} color="white"/>
      <CommentsCounter>{`${commentsCount} comments`}</CommentsCounter>
    </CommentsContainer>
  );
}
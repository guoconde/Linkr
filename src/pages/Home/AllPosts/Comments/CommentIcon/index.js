import { AiOutlineComment } from "react-icons/ai";
import { CommentsContainer, CommentsCounter } from "./style";
import useApi from "../../../../../hooks/useApi";
import useContexts from "../../../../../hooks/useContexts";
import { fireAlert } from "../../../../../utils/alerts";

export default function CommentIcon({ postId, handleComments, setLoadPostComments }) {
  const api = useApi();
  const contexts = useContexts();
  const { auth } = contexts.auth;

  async function handleListComments(postId) {
    try {
      const headers = { headers: { Authorization: `Bearer ${auth?.token}` } };
      const { data } = await api.comments.listComments(postId, headers);

      setLoadPostComments(data);
      handleComments(postId);
    } catch (error) {
      await fireAlert(error.response.data);
      return;
    }
  }

  return(
    <CommentsContainer onClick={() => handleListComments(postId)}>
      <AiOutlineComment size={25} color="white"/>
      <CommentsCounter>3 comments</CommentsCounter>
    </CommentsContainer>
  );
}
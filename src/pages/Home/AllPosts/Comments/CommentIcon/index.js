import { AiOutlineComment } from "react-icons/ai";
import { CommentsContainer, CommentsCounter } from "./style";

export default function CommentIcon({ postId, handleComments }) {
  return(
    <CommentsContainer onClick={() => handleComments(postId)}>
      <AiOutlineComment size={25} color="white"/>
      <CommentsCounter>3 comments</CommentsCounter>
    </CommentsContainer>
  );
}
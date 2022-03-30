import ProfilePicture from "../../../../../components/ProfilePicture";
import {
  ContainerCommentLine,
  DescriptionCommentLine,
  NameCommentLine,
  MessageCommentLine
} from "./style";

export default function CommentLine({ followedId, authorId, userId, name, photo, comment }) {
  return (
    <ContainerCommentLine>
      <ProfilePicture photo={photo} sizeControl={true} />

      <DescriptionCommentLine>
        <NameCommentLine>{`${name} ${followedId ? "• following" : ""} ${authorId === userId ? "• post’s author" : ""}`}</NameCommentLine>
        <MessageCommentLine>{comment}</MessageCommentLine>
      </DescriptionCommentLine>
    </ContainerCommentLine>
  );
}
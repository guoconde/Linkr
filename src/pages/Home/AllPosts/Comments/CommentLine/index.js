import ProfilePicture from "../../../../../components/ProfilePicture";
import {
  ContainerCommentLine,
  DescriptionCommentLine,
  NameCommentLine,
  MessageCommentLine
} from "./style";

export default function CommentLine({ name, photo, comment }) {
  return (
    <ContainerCommentLine>
      <ProfilePicture photo={photo} sizeControl={true} />

      <DescriptionCommentLine>
        <NameCommentLine>{name}</NameCommentLine>
        <MessageCommentLine>{comment}</MessageCommentLine>
      </DescriptionCommentLine>
    </ContainerCommentLine>
  );
}
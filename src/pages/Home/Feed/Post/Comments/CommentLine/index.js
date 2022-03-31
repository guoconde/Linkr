import ProfilePicture from "../../../../../../components/ProfilePicture";
import {
  ContainerCommentLine,
  DescriptionCommentLine,
  NameCommentLine,
  MessageCommentLine,
  InfoTag
} from "./style";

export default function CommentLine({ followedId, authorId, userId, name, photo, comment }) {
  return (
    <ContainerCommentLine>
      <ProfilePicture photo={photo} sizeControl={true} />

      <DescriptionCommentLine>
        <NameCommentLine>
          {`${name}`}

          {(authorId === userId && followedId) ?
            <InfoTag>• post’s author</InfoTag>
           :
            authorId === userId ?
            <InfoTag>• post’s author</InfoTag>
            :
            followedId &&
            <InfoTag>• following</InfoTag>
          }
        </NameCommentLine>

        <MessageCommentLine>{comment}</MessageCommentLine>
      </DescriptionCommentLine>
    </ContainerCommentLine>
  );
}
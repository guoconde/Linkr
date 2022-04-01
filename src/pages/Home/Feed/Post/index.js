import { useState } from "react";
import PostDescription from "./PostDescription";
import DeleteModal from "../../../../components/DeleteModal";
import Likes from "./Likes";
import Comments from "./Comments";
import CommentIcon from "./Comments/CommentIcon";
import Repost from "./Repost";
import useContexts from "../../../../hooks/useContexts";
import {
  Container,
  ContainerPost,
  ContainerImage,
  Name,
  Image,
  Description,
  ExternalLink,
  MetaLink,
  ImagePost,
  ContainerAction,
  GrEditCustom
} from "./style";

export default function Post({
  id,
  userId,
  photo,
  postLikes,
  isLike,
  likeNames,
  name,
  edit,
  setEdit,
  comments,
  commentsCount,
  postIndex,
  setComments,
  url,
  description,
  i,
  reposts,
  reposted,
  sharerId,
  metadataTitle,
  metadataDescription,
  metadataImage,
  handleEdit,
  handleComments,
  handleFeed
}) {

  const contexts = useContexts();
  const { auth } = contexts.auth;
  const [loadPostComments, setLoadPostComments] = useState([]);

  return (
    <div>
      <Container>
        <DeleteModal id={id} userId={userId} setComments={setComments} sharerId={sharerId} />
        <ContainerImage>
          <Image src={photo} />
          <Likes
            postId={id}
            postLikes={postLikes}
            isLike={isLike}
            likeNames={likeNames}
            handleFeed={handleFeed}
          />
          <CommentIcon
            postId={id}
            postIndex={postIndex}
            commentsCount={commentsCount}
            handleComments={handleComments}
            setLoadPostComments={setLoadPostComments}
          />
          <Repost
            postId={id}
            reposts={reposts}
            reposted={reposted}
          />
        </ContainerImage>

        <ContainerPost>
          <Name to={`/user/${userId}`}>{name}</Name>
          <Description>
            <PostDescription
              postId={id}
              postIndex={postIndex}
              edit={edit}
              setEdit={setEdit}
              url={url}
              description={description}
              index={i}
              reposted={reposted}
            />
          </Description>

          <MetaLink>
            <div className="infoPost">
              <p className="title">{metadataTitle}</p>
              <p className="description">{metadataDescription}</p>
              <ExternalLink href={url} target="_blank">
                {url}
              </ExternalLink>
            </div>

            <ImagePost backgroundImage={metadataImage} />
          </MetaLink>
        </ContainerPost>

        {auth?.userId === userId && !sharerId &&
          <ContainerAction>
            <GrEditCustom onClick={() => handleEdit(postIndex)} size={20} />
          </ContainerAction>
        }
      </Container>

      {comments === postIndex &&
        <Comments
          postId={id}
          setComments={setComments}
          loadPostComments={loadPostComments}
          setLoadPostComments={setLoadPostComments}
        />
      }
    </div>
  );
}
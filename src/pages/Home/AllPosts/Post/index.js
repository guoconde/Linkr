import { useState } from "react";
import PostDescription from "./PostDescription";
import DeleteModal from "../../../../components/DeleteModal";
import Likes from "../Likes";
import Comments from "../Comments";
import CommentIcon from "../Comments/CommentIcon";
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
  setComments,
  url,
  description,
  i,
  metadataTitle,
  metadataDescription,
  metadataImage,
  handleEdit,
  handleComments,
  handleGetAllPosts
}) {

  const contexts = useContexts();
  const { auth } = contexts.auth;
  const [loadPostComments, setLoadPostComments] = useState([]);

  return (
    <div>
      <Container>
        <DeleteModal id={id} userId={userId} />
        <ContainerImage>
          <Image src={photo} />
          <Likes
            postId={id}
            postLikes={postLikes}
            isLike={isLike}
            likeNames={likeNames}
            handleGetAllPosts={handleGetAllPosts}
          />
          <CommentIcon
            postId={id}
            handleComments={handleComments}
            setLoadPostComments={setLoadPostComments}
          />
        </ContainerImage>

        <ContainerPost>
          <Name to={`/user/${userId}`}>{name}</Name>
          <Description>
            <PostDescription
              postId={id}
              edit={edit}
              setEdit={setEdit}
              url={url}
              description={description}
              index={i}
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

        {auth?.userId === userId &&
          <ContainerAction>
            <GrEditCustom onClick={() => handleEdit(id)} size={20} />
          </ContainerAction>
        }
      </Container>

      {comments === id &&
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
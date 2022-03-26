
import { useLocation, useNavigate } from "react-router";
import { Watch } from "react-loader-spinner";
import { fireAlert } from "../../../utils/alerts";
import useAuth from "../../../hooks/useAuth";
import useApi from "../../../hooks/useApi";
import useSearchedUser from "../../../hooks/useSearchedUser";
import { useState, useEffect } from "react";
import usePost from "../../../hooks/usePost";
import PostDescription from "./PostDescription";
import DeleteModal from "../../../components/DeleteModal";
import {
  Container,
  ContainerPost,
  ContainerImage,
  Name,
  Image,
  Description,
  ExternalLink,
  Content,
  MetaLink,
  ImagePost,
  ContainerAction,
  GrEditCustom,
  Feed
} from "./style";

export default function AllPosts() {
  const [data, setData] = useState();
  const [edit, setEdit] = useState(null);
  const api = useApi();
  const { pathname } = useLocation();
  const { auth, logout } = useAuth()
  const { setUsernameSearched } = useSearchedUser()
  const navigate = useNavigate()
  const { reloadPage } = usePost();

  useEffect(() => {
    async function teste() {
      try {
        const headers = { headers: { Authorization: `Bearer ${auth?.token}` } }
        let promisse

        if(pathname.includes("timeline")) promisse = await api.feed.listAll();
        else if (pathname.includes("hashtag")) promisse = await api.feed.listByHashtag(pathname.split("/")[2], headers);
        else if (pathname.includes("user")) {
          promisse = await api.feed.listByUser(pathname.split("/")[2], headers);
          if(!promisse.data) {
            fireAlert("User doesn't exists")
            navigate("/timeline")
          }
          setData(promisse.data.posts);
          setUsernameSearched(promisse.data.name)
          return
        }

        setData(promisse.data);
      } catch (error) {
        if(error.response.status === 401) {
          await fireAlert(error.response.data);
          logout()
          return navigate("/")
        }
        return fireAlert(
          "An error occured while trying to fetch the posts, Plese refresh the page!"
        );
      }
    }

    teste();

    // eslint-disable-next-line
  }, [pathname, reloadPage, edit]);

  if (!data)
    return (
      <Content>
        <Watch color="white" message="Teste" ariaLabel="loading-indicator" />
        <div>Loading...</div>
      </Content>
    );

  if (data.length === 0)
    return (
      <Content>
        <div>There are no posts yet!</div>
      </Content>
    );

  function handleEdit(postId) {
    if(edit !== null && edit === postId){
      setEdit(null);
    }else{
      setEdit(postId);
    }
  }

  return (
    <Feed>
      {data.map((el, i) => (
        <Container key={i}>
          <DeleteModal {...el}/>
          <ContainerImage>
            <Image src={el.photo} />
          </ContainerImage>

          <ContainerPost>
            <Name to={`/user/${el.userId}`}>{el.name}</Name>
            <Description>
              <PostDescription
                postId={el.id}
                edit={edit}
                setEdit={setEdit}
                url={el.url}
                description={el.description}
              />
            </Description>

            <MetaLink>
              <div className="infoPost">
                <p className="title">{el.metadataTitle}</p>
                <p className="description">{el.metadataDescription}</p>
                <ExternalLink href={el.url} target="_blank">
                  {el.url}
                </ExternalLink>
              </div>

              <ImagePost backgroundImage={el.metadataImage} />
            </MetaLink>
          </ContainerPost>

          {auth?.userId === el.userId &&
            <ContainerAction>
              <GrEditCustom onClick={() => handleEdit(el.id)} size={20} />
            </ContainerAction>
          }
        </Container>
      ))}
    </Feed>
  );
}

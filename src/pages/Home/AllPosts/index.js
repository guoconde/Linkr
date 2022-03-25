import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { Watch } from "react-loader-spinner";
import { fireAlert } from "../../../utils/alerts";
import HighlightHashtag from "./HighlightHashtags/HighlightHashtag";
import useAuth from "../../../hooks/useAuth";
import useApi from "../../../hooks/useApi";
import useSearchedUser from "../../../hooks/useSearchedUser";
import {
  Container,
  ContainerPost,
  ContainerImage,
  Name,
  Image,
  Description,
  Link,
  Content,
  MetaLink,
  ImagePost,
  Feed,
} from "./style";

export default function AllPosts() {
  const api = useApi();
  const [data, setData] = useState([]);
  const { pathname } = useLocation();
  const { auth } = useAuth()
  const { setUsernameSearched } = useSearchedUser()
  const navigate = useNavigate()

  useEffect(() => {
    async function teste() {
      try {
        const headers = { headers: { Authorization: `Bearer ${auth?.token}` }}
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
        if (error)
          console.log(error);
          return fireAlert(
            "An error occured while trying to fetch the posts, Plese refresh the page!"
          );
      }
    }

    teste();

    // eslint-disable-next-line
  }, [pathname]);

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

  return (
    <Feed>
      {data.map((el, i) => (
        <Container key={i}>
          <ContainerImage>
            <Image src={el.photo} />
          </ContainerImage>
          <ContainerPost>
            <Name>{el.name}</Name>
            <Description><HighlightHashtag>{el.description}</HighlightHashtag></Description>
            <MetaLink>
              <div className="infoPost">
                <p className="title">{el.metadataTitle}</p>
                <p className="description">{el.metadataDescription}</p>
                <Link href={el.url} target="_blank">
                  {el.url}
                </Link>
              </div>
              <ImagePost backgroundImage={el.metadataImage} />
            </MetaLink>
          </ContainerPost>
        </Container>
      ))}
    </Feed>
  );
}

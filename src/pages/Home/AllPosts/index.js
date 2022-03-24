import { useState, useEffect, useContext } from "react";
import useApi from "../../../hooks/useApi";
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
  GrEditCustom
} from "./style";
import { Watch } from "react-loader-spinner";
import { fireAlert } from "../../../utils/alerts";
import HighlightHashtag from "./HighlightHashtags/HighlightHashtag";
import { useLocation } from "react-router";
import useAuth from "../../../hooks/useAuth";
import { SearchedUserContext } from "../../../contexts/SearchedUserContext"

export default function AllPosts() {
  const [data, setData] = useState([]);
  const api = useApi();
  const { pathname } = useLocation();
  const { auth } = useAuth()
  const { setUsernameSearched } = useContext(SearchedUserContext)

  useEffect(() => {
    async function teste() {
      try {
        const headers = { headers: { Authorization: `Bearer ${auth?.token}` }}
        let promisse

        if(pathname.split("/")[1] === "timeline") promisse = await api.feed.getAllPosts();
        else if (pathname.split("/")[1] === "hashtag") promisse = await api.feed.listByHashtag(pathname.split("/")[2], headers);
        else if (pathname.split("/")[1] === "user") {
          promisse = await api.feed.listByUser(pathname.split("/")[2], headers);
          setData(promisse.data.posts);
          console.log(promisse.data)
          setUsernameSearched(promisse.data.name)
          return
        }

        console.log(promisse.data);
        setData(promisse.data);
      } catch (error) {
        if (error)
          return fireAlert(
            "An error occured while trying to fetch the posts, Plese refresh the page!"
          );
        console.log(error);
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
    <>
      {data.map((el, i) => (
        <Container key={i}>
          <ContainerImage>
            <Image src={el.photo} />
            <GrEditCustom />
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
    </>
  );
}

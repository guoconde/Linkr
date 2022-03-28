import { useRef, useState, useEffect } from "react";
import { useLocation, useParams } from "react-router";
import { fireAlert } from "../../utils/alerts";
import PublishPost from "./PublishPost";
import Trendings from "./Trendings";
import AllPosts from "./AllPosts";
import useApi from "../../hooks/useApi";
import useMenu from "../../hooks/useMenu";
import useSearchedUser from "../../hooks/useSearchedUser";
import ProfilePicture from "../../components/ProfilePicture";
import { Container, ContainerTitleProfile, Content, TitleOfSection } from "./style";

export default function Home() {
  const api = useApi();
  const { handleHideLogout } = useMenu();
  const { pathname } = useLocation();
  const { usernameSearched } = useSearchedUser();
  const { id } = useParams();
  const [userPhoto, setUserPhoto] = useState(null);

  useEffect(() => {
    handleUserById();
    // eslint-disable-next-line
  }, [id]);

  async function handleUserById() {
    if (!id) {
      return;
    }

    try {
      const { data } = await api.user.getUserById(id);
      setUserPhoto(data);
    } catch (error) {
      if (error.response?.status === 400) {
        fireAlert(error.response.data);
      }

      if (error.response?.status === 404) {
        fireAlert(error.response.data);
      }
    }
  }

  let title = useRef("");
  if(pathname.split("/")[1] === "timeline") title.current = "timeline"
  else if (pathname.split("/")[1] === "hashtag") title.current = `# ${pathname.split("/")[2]}`
  else if (pathname.split("/")[1] === "user") title.current = `${usernameSearched}'s posts`

  return (
    <Container onClick={() => handleHideLogout()}>
      <Content>
        {pathname.split("/")[1] === "user" ?
          <ContainerTitleProfile>
            <ProfilePicture photo={userPhoto} titleMargin={true} displayControl={true}/>
            <TitleOfSection>{title.current}</TitleOfSection>
          </ContainerTitleProfile>
          :
          <ContainerTitleProfile>
            <TitleOfSection>{title.current}</TitleOfSection>
          </ContainerTitleProfile>
        }
        <PublishPost />
        <AllPosts />
      </Content>
      <Trendings />
    </Container>
  );
}
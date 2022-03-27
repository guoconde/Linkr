import { useRef } from "react";
import { useLocation } from "react-router";
import PublishPost from "./PublishPost";
import Trendings from "./Trendings";
import AllPosts from "./AllPosts";
import useMenu from "../../hooks/useMenu";
import useSearchedUser from "../../hooks/useSearchedUser";
import { Container, Content, TitleOfSection } from "./style";

export default function Home() {
  const { handleHideLogout } = useMenu();
  const { pathname } = useLocation();
  const { usernameSearched } = useSearchedUser();

  let title = useRef("");
  if(pathname.split("/")[1] === "timeline") title.current = "timeline"
  else if (pathname.split("/")[1] === "hashtag") title.current = `# ${pathname.split("/")[2]}`
  else if (pathname.split("/")[1] === "user") title.current = `${usernameSearched}'s posts`
  
  return (
    <Container onClick={() => handleHideLogout()}>
      <Content>
        <TitleOfSection>{title.current}</TitleOfSection>
        <PublishPost />
        <AllPosts />
      </Content>
      <Trendings />
    </Container>
  );
}
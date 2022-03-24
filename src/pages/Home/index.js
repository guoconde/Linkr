import PublishPost from "./PublishPost";
import Trendings from "./Trendings";
import {
  Container,
  Content,
  TitleOfSection
} from "./style";
import useMenu from "../../hooks/useMenu";
import AllPosts from "./AllPosts";
import { useLocation } from "react-router";
import { useContext, useEffect } from "react/cjs/react.development";
import { useState } from "react";
import { SearchedUserContext } from "../../contexts/SearchedUserContext";

export default function Home() {
  const { handleHideLogout } = useMenu();
  const { pathname } = useLocation();
  const [ title, setTitle ] = useState()
  const { usernameSearched } = useContext(SearchedUserContext)
  
  useEffect(() => {
    if(pathname.split("/")[1] === "timeline") setTitle("timeline")
    else if (pathname.split("/")[1] === "hashtag") setTitle(`# ${pathname.split("/")[2]}`)
    else if (pathname.split("/")[1] === "user") setTitle(`${usernameSearched}'s posts`)
    //eslint-disable-next-line
  }, [pathname, usernameSearched])

  return (
    <Container onClick={() => handleHideLogout()}>
      <Content>
        <TitleOfSection>{title}</TitleOfSection>
        <PublishPost />
        <AllPosts />
      </Content>
      <Trendings />
    </Container>
  );
}

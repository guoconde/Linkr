import { useRef, useState } from "react";
import { useLocation } from "react-router";
import useContexts from "../../hooks/useContexts";

import PublishPost from "./PublishPost";
import Trendings from "./Trendings";
import Feed from "./Feed";
import Title from "./Title";
import { Container, Content } from "./style";

export default function Home() {
  const contexts = useContexts();
  const { usernameSearched } = contexts.searchedUser;
  const { handleHideLogout } = contexts.menu;
  const { pathname } = useLocation();
  const [userPhoto, setUserPhoto] = useState(null);
  const [isFollowing, setIsFollowing] = useState(null);

  let title = useRef();
  if (pathname.split("/")[1] === "timeline") title.current = "timeline";
  else if (pathname.split("/")[1] === "hashtag")
    title.current = `# ${pathname.split("/")[2]}`;
  else if (pathname.split("/")[1] === "user")
    title.current = `${usernameSearched}'s posts`;

  return (
    <Container onClick={() => handleHideLogout()}>
      <div className="all">
        <Title 
          userPhoto={userPhoto} 
          title={title} 
          isFollowing={isFollowing} 
        />
        
        <div className="main">
          <Content>
            <PublishPost />
            <Feed
              setIsFollowing={setIsFollowing}
              setUserPhoto={setUserPhoto}
            />
          </Content>
          <Trendings />
        </div>
      </div>
    </Container>
  );
}
import { useRef, useState} from "react";
import { useLocation } from "react-router";
import PublishPost from "./PublishPost";
import Trendings from "./Trendings";
import AllPosts from "./AllPosts";
import useApi from "../../hooks/useApi";
import useContexts from "../../hooks/useContexts";
import ProfilePicture from "../../components/ProfilePicture";
import {
  Container,
  ContainerTitleProfile,
  Content,
  FollowButton,
  TitleOfSection,
} from "./style";
import { ThreeDots } from "react-loader-spinner";

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
        <Title userPhoto={userPhoto} title={title} isFollowing={isFollowing} />
        <div className="main">
          <Content>
            <PublishPost />
            <AllPosts setIsFollowing={setIsFollowing} setUserPhoto={setUserPhoto} />
          </Content>
          <Trendings />
        </div>
      </div>
    </Container>
  );
}

function Title({ userPhoto, title, isFollowing }) {
  const { pathname } = useLocation();
  const contexts = useContexts();
  const { auth } = contexts.auth;
  const { reloadPage, setReloadPage } = contexts.post;

  const api = useApi();
  const [isLoading, setIsLoading] = useState(false);

  async function handleFollow(followedId) {
    setIsLoading(true);
    const headers = { headers: { Authorization: `Bearer ${auth?.token}` } };
    try {
      await api.user.follow({ followedId }, headers);
      setReloadPage(!reloadPage);
    } catch (error) {
      alert(error);
    }
    setIsLoading(false);
  }

  if (pathname.split("/")[1] !== "user") {
    return (
      <ContainerTitleProfile>
        <TitleOfSection>{title.current}</TitleOfSection>
      </ContainerTitleProfile>
    );
  }

  return (
    <ContainerTitleProfile>
      <div className="info">
        <ProfilePicture
          photo={userPhoto}
          titleMargin={true}
          displayControl={true}
        />
        <TitleOfSection>{title.current}</TitleOfSection>
      </div>
      <FollowButton
        onClick={() => handleFollow(pathname.split("/")[2])}
        disabled={isLoading}
        isFollowing={isFollowing}
      >
        {isLoading && <ThreeDots color="#000" height={30} width={30} />}
        {isLoading ? "" : isFollowing ? "Unfollow" : "Follow"}
      </FollowButton>
    </ContainerTitleProfile>
  );
}

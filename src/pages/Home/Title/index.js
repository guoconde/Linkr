import { useState } from "react";
import { useLocation } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

import { ContainerTitleProfile, FollowButton, TitleOfSection } from "./style";
import useContexts from "../../../hooks/useContexts";
import useApi from "../../../hooks/useApi";
import ProfilePicture from "../../../components/ProfilePicture";

export default function Title({ userPhoto, title, isFollowing }) {
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
      <ContainerTitleProfile titleValue={pathname.split("/")[1]}>
        <TitleOfSection>{title.current}</TitleOfSection>
      </ContainerTitleProfile>
    );
  }

  return (
    <ContainerTitleProfile titleValue={pathname.split("/")[1]}>
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

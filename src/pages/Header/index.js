import { useState } from "react";
import { useLocation } from "react-router-dom";
import ProfilePicture from "../../components/profilePicture";

import { Container, DownArrow, Logout, Title, UserIcon } from "./style";

export default function Header() {
  const [toggleLogout, setToggleLogout] = useState(false);
  const { pathname } = useLocation();

  if (pathname === "/login" || pathname === "/register") {
    return null;
  }

  return (
    <Container>
      <Title>linkr</Title>
      <UserIcon>
        <DownArrow onClick={() => setToggleLogout(!toggleLogout)}> </DownArrow>

        <Logout show={toggleLogout}>Logout</Logout>

        <ProfilePicture />
      </UserIcon>
    </Container>
  );
}

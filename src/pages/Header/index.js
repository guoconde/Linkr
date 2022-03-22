import { useState } from "react";
import ProfilePicture from "../../components/profilePicture";

import { Container, DownArrow, Logout, Title, UserIcon } from "./style";

export default function Header() {
  const [toggleLogout, setToggleLogout] = useState(false);

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

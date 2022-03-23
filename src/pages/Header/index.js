import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useMenu from "../../hooks/useMenu";
import ProfilePicture from "../../components/profilePicture";

import { Container, DownArrow, Logout, Title, UserIcon } from "./style";

export default function Header() {
  const navigate = useNavigate();
  const { auth, logout } = useAuth();
  const { toggleLogout, handleToggleLogout, handleHideLogout } = useMenu();
  const { pathname } = useLocation();

  useEffect(() => {
    if (!auth) {
      handleHideLogout();
      navigate("/");
    }
    //eslint-disable-next-line
  }, [auth]);

  if (pathname === "/" || pathname === "/sign-up") {
    return null;
  }

  return (
    <Container>
      <Title onClick={() => handleHideLogout()}>linkr</Title>
      <UserIcon>
        <DownArrow
          show={toggleLogout ? 1 : undefined}
          onClick={() => handleToggleLogout()}
        />

        <Logout onClick={() => logout()} show={toggleLogout ? 1 : undefined}>Logout</Logout>

        <ProfilePicture />
      </UserIcon>
    </Container>
  );
}

import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useMenu from "../../hooks/useMenu";
import ProfilePicture from "../ProfilePicture";
import { DebounceInput } from "react-debounce-input";

import { Container, DownArrow, InputFindUser, Logout, SearchIcon, Title, UserIcon } from "./style";
import useApi from "../../hooks/useApi";
import ListUsers from "./findUsers";

export default function Header() {
  const navigate = useNavigate();
  const { auth, logout } = useAuth();
  const { toggleLogout, handleToggleLogout, handleHideLogout } = useMenu();
  const { pathname } = useLocation();
  const [users, setUsers] = useState([])
  const api = useApi()

  async function handleFindUsers(event) {

    let findAllUsers = event.target.value

    if (event.target.value.length < 3) findAllUsers = null

    const { data } = await api.user.getAllUsers(findAllUsers)

    setUsers(data)
  }


  useEffect(() => {
    // handleFindUsers()
    if (!auth) {
      handleHideLogout();
      navigate("/");
    }

    //eslint-disable-next-line
  }, [auth]);

  if (pathname === "/" || pathname === "/sign-up") {
    return null;
  }

  function handleClickTitle() {
    handleHideLogout();
    navigate("/timeline");
  }

  return (
    <Container>
      <Title onClick={() => handleClickTitle()}>linkr</Title>
      <InputFindUser>
        <DebounceInput
          className="debounce-input"
          minLength={3}
          debounceTimeout={300}
          placeholder="Search for people"
          onChange={event => handleFindUsers(event)}
          onSubmit={event => event.preventDefault()}
        />
        <SearchIcon />
        <div className="list-users">
          <ListUsers users={users} setUsers={setUsers} />
        </div>
      </InputFindUser>
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

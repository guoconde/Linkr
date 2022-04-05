import { Fragment, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { DebounceInput } from "react-debounce-input";
import ProfilePicture from "../ProfilePicture";
import useApi from "../../hooks/useApi";
import ListUsers from "./findUsers";
import useContexts from "../../hooks/useContexts";
import {
  Container,
  ContentMobile,
  DownArrow,
  ContainerInputFindUser,
  InputFindUser,
  InputFindUserMobile,
  Logout,
  SearchIcon,
  Title,
  UserIcon,
  ContainerMobile,
  ContainerInputFindUserMobile
} from "./style";

export default function Header() {
  const api = useApi();
  const contexts = useContexts();
  const navigate = useNavigate();
  const { auth, logout } = contexts.auth;
  const { pathname } = useLocation();
  const { 
    toggleLogout,
    handleToggleLogout,
    handleHideLogout,
    users,
    setUsers,
    value,
    setValue,
    valueMobile,
    setValueMobile,
    handleHideSearchBar
  } = contexts.menu;

  const handleKeyDown = async (event) => {
    if (event.key === 'Escape') {
      handleHideSearchBar();
    }
  }

  async function handleFindUsers(event) {
    let findAllUsers = event.target.value;
    const headers = { headers: { Authorization: `Bearer ${auth?.token}`}};

    if (event.target.value.length < 3) return setUsers(null);

    const { data } = await api.user.getAllUsers(findAllUsers, headers);

    setUsers(data);
  }

  useEffect(() => {
    if (!auth) {
      handleHideLogout();
      handleHideSearchBar();
      navigate("/");
    }

    //eslint-disable-next-line
  }, [auth]);

  useEffect(() =>{
    handleHideSearchBar();

    //eslint-disable-next-line
  }, [pathname]);

  if (pathname === "/" || pathname === "/sign-up") {
    return null;
  }

  function handleClickTitle() {
    handleHideLogout();
    navigate("/timeline");
    handleHideSearchBar();

    window.scroll(0,0);
  }

  function handleDebounceInput(event) {
    handleFindUsers(event);
    setValue(event.target.value);
    setValueMobile(event.target.value);
  }

  return (
    <Fragment>
      <Container>
        <Title onClick={() => handleClickTitle()}>linkr</Title>

        <ContainerInputFindUser onClick={() => handleHideLogout()}>
          <InputFindUser>
            <DebounceInput
              className="debounce-input"
              debounceTimeout={300}
              min="3"
              placeholder="Search for people and friends"
              value={value}
              onKeyDown={handleKeyDown}
              onChange={event => handleDebounceInput(event)}
              onSubmit={event => event.preventDefault()}
            />
            <SearchIcon />

            <div className="list-users">
              <ListUsers users={users} setUsers={setUsers} />
            </div>
          </InputFindUser>
        </ContainerInputFindUser>

        <UserIcon onClick={() => handleHideSearchBar()}>
          <DownArrow
            show={toggleLogout ? 1 : undefined}
            onClick={() => handleToggleLogout()}
          />
          <Logout onClick={() => logout()} show={toggleLogout ? 1 : undefined}>Logout</Logout>
          <ProfilePicture cursorControl={true}/>
        </UserIcon>
      </Container>

      <ContainerMobile>
        <ContentMobile>
          <ContainerInputFindUserMobile onClick={() => handleHideLogout()}>
            <InputFindUserMobile>
              <DebounceInput
                className="debounce-input-mobile"
                debounceTimeout={300}
                min="3"
                placeholder="Search for people and friends"
                value={valueMobile}
                onKeyDown={handleKeyDown}
                onChange={event => handleDebounceInput(event)}
                onSubmit={event => event.preventDefault()}
              />
              <SearchIcon />
              
              <div className="list-users-mobile">
                <ListUsers users={users} setUsers={setUsers} />
              </div>
            </InputFindUserMobile>
          </ContainerInputFindUserMobile>
        </ContentMobile>
      </ContainerMobile>
    </Fragment>
  );
}
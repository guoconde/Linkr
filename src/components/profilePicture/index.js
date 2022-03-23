import styled from "styled-components";
import useAuth from "../../hooks/useAuth";
import useMenu from "../../hooks/useMenu";

export default function ProfilePicture() {
  const { auth } = useAuth();
  const { handleToggleLogout } = useMenu();

  return (
    <Image
      onClick={() => handleToggleLogout()}
      src={auth?.photo}
      alt="profile-picture"
    />
  );
}

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;

  cursor: pointer;
`;
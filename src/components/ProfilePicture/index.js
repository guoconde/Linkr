import styled from "styled-components";
import useAuth from "../../hooks/useAuth";
import useMenu from "../../hooks/useMenu";

export default function ProfilePicture({ photo, titleMargin, displayControl, cursorControl }) {
  const { auth } = useAuth();
  const { handleToggleLogout } = useMenu();

  return (
    <Image
      onClick={() => handleToggleLogout()}
      src={photo ? photo : auth?.photo}
      alt="profile-picture"
      titleMargin={titleMargin}
      displayControl={displayControl}
      cursorControl={cursorControl}
    />
  );
}

export const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;

  margin: ${(props) => props.titleMargin ? "0 18px 0 23px" : "0"};

  cursor: ${(props) => props.cursorControl && "pointer"};

  @media screen and (max-width: 900px) {
    display: ${(props) => props.displayControl && "none"};
  }
`;
import styled from "styled-components";
import useContexts from "../../hooks/useContexts";

export default function ProfilePicture({ photo, titleMargin, displayControl, cursorControl }) {
  const contexts = useContexts()
  const { auth } = contexts.auth
  const { handleToggleLogout } = contexts.menu

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
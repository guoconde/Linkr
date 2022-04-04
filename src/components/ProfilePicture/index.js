import useContexts from "../../hooks/useContexts";
import ImageProfile from "./style";

export default function ProfilePicture({ 
  photo, 
  titleMargin, 
  displayControl, 
  cursorControl,
  sizeControl
}) {

  const contexts = useContexts()
  const { auth } = contexts.auth
  const { handleToggleLogout } = contexts.menu

  return (
    <ImageProfile
      onClick={() => handleToggleLogout()}
      src={photo ? photo : auth?.photo}
      alt="profile-picture"
      titleMargin={titleMargin}
      displayControl={displayControl}
      cursorControl={cursorControl}
      sizeControl={sizeControl}
    />
  );
}
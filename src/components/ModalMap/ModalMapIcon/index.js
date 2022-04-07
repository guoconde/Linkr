import useContexts from "../../../hooks/useContexts";
import StyledMdLocationOn from "./style";

export default function ModalMapIcon({ postIndex, handleMap }) {
  const contexts = useContexts();
  const { setModalMap } = contexts.geolocation;

  function handleOpenMap() {
    setModalMap(true);
    handleMap(postIndex);
  }

  return(
    <StyledMdLocationOn onClick={() => handleOpenMap()} />
  );
}
import useContexts from "../../../hooks/useContexts";
import StyledMdLocationOn from "./style";

export default function ModalMapIcon() {
  const contexts = useContexts();
  const { setModalMap } = contexts.geolocation;

  return(
    <StyledMdLocationOn onClick={() => setModalMap(true)} />
  );
}
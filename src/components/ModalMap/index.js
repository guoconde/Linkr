import GoogleMapReact from "google-map-react";
import useContexts from "../../hooks/useContexts";
import {
  ModalMapContainer,
  ModalMapContent,
  StyledMdLocationOn,
  StyledIoMdClose,
  UserNameInModal
} from "./style";

export default function ModalMap({ userName, latitude, longitude, setMap }) {
  const contexts = useContexts();
  const { setModalMap } = contexts.geolocation;

  function handleCloseMap() {
    setModalMap(false);
    setMap(null);
  }

  return (
    <ModalMapContainer>
      <ModalMapContent>
        <UserNameInModal>{`${userName}'s location`}</UserNameInModal>

        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyCiLNoIRap3ynkQ-x9BHNC_cv6qIQy43oo",
            language: "en",
            region: "US"
          }}
          defaultCenter={{ lat: latitude, lng: longitude }}
          defaultZoom={15}
        >
          <StyledMdLocationOn
            lat={parseFloat(latitude)}
            lng={parseFloat(longitude)}
          />
        </GoogleMapReact>

        <StyledIoMdClose
          size={25}
          onClick={() => handleCloseMap()}
        />
      </ModalMapContent>
    </ModalMapContainer>
  );
}
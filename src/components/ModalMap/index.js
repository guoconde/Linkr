import GoogleMapReact from "google-map-react";
import useContexts from "../../hooks/useContexts";
import {
  ModalMapContainer,
  ModalMapContent,
  StyledMdLocationOn,
  StyledIoMdClose,
  UserNameInModal
} from "./style";

export default function ModalMap() {
  const contexts = useContexts();
  const { setModalMap, userLocation } = contexts.geolocation;

  return (
    <ModalMapContainer>
      <ModalMapContent>
        <UserNameInModal>User's location</UserNameInModal>

        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyCiLNoIRap3ynkQ-x9BHNC_cv6qIQy43oo",
            language: "en",
            region: "US"
          }}
          defaultCenter={{ lat: userLocation.latitude, lng: userLocation.longitude }}
          defaultZoom={15}
        >
          <StyledMdLocationOn
            lat={userLocation.latitude}
            lng={userLocation.longitude}
          />
        </GoogleMapReact>

        <StyledIoMdClose
          size={25}
          onClick={() => setModalMap(false)}
        />
      </ModalMapContent>
    </ModalMapContainer>
  );
}
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

  console.log(process.env.REACT_APP_API_BASE_URL);
  console.log(process.env.API_GOOGLE_MAPS_KEY);

  return (
    <ModalMapContainer>
      <ModalMapContent>
        <UserNameInModal>{`${userName}'s location`}</UserNameInModal>

        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.API_GOOGLE_MAPS_KEY,
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
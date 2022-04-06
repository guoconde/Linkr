import { useEffect, useState } from "react";
import { MdOutlineLocationOn, MdOutlineLocationOff } from "react-icons/md";
import { fireAlert } from "../../../../utils/alerts";
import ReactTooltip from "react-tooltip";
import useContexts from "../../../../hooks/useContexts";
import { LocationContainer, ToggleTextLocation, TooltipContainer  } from "./style";

export default function Geolocation() {
  const contexts = useContexts();
  const { userLocation, setUserLocation } = contexts.geolocation;
  const [isLocation, setIsLocation] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (!isLocation && userLocation) {
      setIsLocation(true);
    }

    if (errorMessage !== '') {
      localStorage.removeItem('geolocation');
      setUserLocation(null);
      setIsLocation(false);
    }

    // eslint-disable-next-line
  }, [errorMessage]);

  function handleToggleLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;

        if (isLocation && userLocation) {
          localStorage.removeItem('geolocation');
          setUserLocation(null);
          setIsLocation(false);
        } else {
          localStorage.setItem('geolocation', JSON.stringify({ latitude, longitude }));
          setUserLocation({ latitude, longitude });
          setIsLocation(true);
        }

        setErrorMessage('');
      }, showError);
    } else {
      fireAlert("Geolocation is not supported by this browser.");
    }
  }

  function showError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        setErrorMessage("The geolocation request was denied.");
        break;
      case error.POSITION_UNAVAILABLE:
        setErrorMessage("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        setErrorMessage("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        setErrorMessage("An unknown error occurred.");
        break;
    }
  }

  return (
    <LocationContainer onClick={() => handleToggleLocation()}>
      {isLocation || userLocation ?
        <>
          <MdOutlineLocationOn color="#707070" />
          <ToggleTextLocation>Location enabled</ToggleTextLocation>
        </>
        :
        <>
          {errorMessage ?
            <>
              <TooltipContainer data-tip={errorMessage}>
                <MdOutlineLocationOff color="#dc3545" />
                <ToggleTextLocation error={true}>
                  Location disabled
                </ToggleTextLocation>
              </TooltipContainer>
              <ReactTooltip place="bottom" type="error" effect="float" />
            </>
            :
            <>
              <MdOutlineLocationOff color="#707070" />
              <ToggleTextLocation error={false}>
                Location disabled
              </ToggleTextLocation>
            </>
          }
        </>
      }
    </LocationContainer>
  );
}
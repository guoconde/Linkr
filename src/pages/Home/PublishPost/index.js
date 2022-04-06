import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { fireAlert } from "../../../utils/alerts";
import { MdOutlineLocationOn, MdOutlineLocationOff } from "react-icons/md";
import ReactTooltip from "react-tooltip";
import useApi from "../../../hooks/useApi";
import ProfilePicture from "../../../components/ProfilePicture";
import useContexts from "../../../hooks/useContexts";
import {
  Button,
  Container,
  ContainerProfilePicture,
  Description,
  Input,
  TextArea,
  TooltipContainer,
  SubmitContainer,
  LocationContainer,
  ToggleTextLocation
} from "./style";
import { findHashtags } from "../../../utils/findHastags";

export default function PublishPost() {
  const api = useApi();
  const contexts = useContexts();
  const navigate = useNavigate();
  const input = useRef();
  const { pathname } = useLocation();
  const { auth, logout } = contexts.auth;
  const { reloadPage, setReloadPage } = contexts.post;
  const { handleHideLogout } = contexts.menu;
  const [formData, setFormData] = useState({ url: "", description: "", });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isLocation, setIsLocation] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [userLocation, setUserLocation] = useState(localStorage.getItem('geolocation'));

  useEffect(() => {
    if (!isLoading && userLocation) {
      setIsLocation(true);
    }

    if (errorMessage !== '') {
      localStorage.removeItem('geolocation');
      setUserLocation(null);
      setIsLocation(false);
    }

    // eslint-disable-next-line
  }, [errorMessage]);

  async function handleSubmit(e) {
    input.current.style.outlineColor = "#efefef";
    input.current.style.border = "1px solid #efefef";
    e.preventDefault();

    if (!formData.url) {
      return;
    }

    const isHashtagsValid = findHashtags(formData.description);

    if (!isHashtagsValid) {
      setError("Invalid Hashtags");
      input.current.style.outlineColor = "#dc3545";
      input.current.style.border = "1px solid #dc3545";
      input.current.focus();

      return;
    }

    setIsLoading(true);

    try {
      const headers = { headers: { Authorization: `Bearer ${auth?.token}` } }

      await api.posts.publish(formData, headers);
      setFormData({ url: "", description: "", });
      setError("");
      setReloadPage(!reloadPage);
    } catch (error) {
      await fireAlert(error.response.data);
      if (error.response.status === 401) {
        logout();
        return navigate("/");
      }

      if (error.response.status === 400) {
        setError("Repeted Hashtags");
        input.current.style.outlineColor = "#dc3545";
        input.current.style.border = "1px solid #dc3545";
        input.current.focus();
      }
    }

    setIsLoading(false);
  }

  function handleInputChange({ target }) {
    setFormData({ ...formData, [target.name]: target.value });
  }

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

  if (pathname.includes('hashtag') || pathname.includes('user')) {
    return null;
  }

  return (
    <Container onClick={() => handleHideLogout()}>
      <ContainerProfilePicture>
        <ProfilePicture />
      </ContainerProfilePicture>

      <form onSubmit={handleSubmit}>
        <Description>What are you going to share today?</Description>

        <Input
          type="url"
          name="url"
          value={formData.url}
          placeholder="http://..."
          onChange={handleInputChange}
          disabled={isLoading}
          required
        />

        <TextArea
          ref={input}
          name="description"
          value={formData.description}
          placeholder="Awesome article about #javascript"
          onChange={handleInputChange}
          disabled={isLoading}
        />
        <span className="error-message">{error}</span>

        <SubmitContainer>
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

          <Button disabled={isLoading} onClick={() => setReloadPage(!reloadPage)}>
            {isLoading ? "Publishing..." : "Publish"}
          </Button>
        </SubmitContainer>
      </form>
    </Container>
  );
}
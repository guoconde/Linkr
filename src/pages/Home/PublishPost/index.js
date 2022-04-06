import { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { findHashtags } from "../../../utils/findHastags";
import { fireAlert } from "../../../utils/alerts";
import Geolocation from "./Geolocation";
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
  SubmitContainer
} from "./style";

export default function PublishPost() {
  const api = useApi();
  const contexts = useContexts();
  const navigate = useNavigate();
  const input = useRef();
  const { pathname } = useLocation();
  const { auth, logout } = contexts.auth;
  const { reloadPage, setReloadPage } = contexts.post;
  const { handleHideLogout } = contexts.menu;
  const { userLocation } = contexts.geolocation;
  const [formData, setFormData] = useState({ url: "", description: "", });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

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

      if (userLocation) {
        const { data } = await api.posts.lastPost(auth.userId, headers);
        const postGeolocation = {
          userId: data.userId,
          postId: data.postId,
          latitude: userLocation.latitude.toString(),
          longitude: userLocation.longitude.toString()
        }

        await api.geolocation.insertGeolocation(postGeolocation, headers);
      }

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

  if (pathname.includes('hashtag') || pathname.includes('user')) {
    return null;
  }

  return (
    <>
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
            <Geolocation />            

            <Button disabled={isLoading} onClick={() => setReloadPage(!reloadPage)}>
              {isLoading ? "Publishing..." : "Publish"}
            </Button>
          </SubmitContainer>
        </form>
      </Container>
    </>
  );
}
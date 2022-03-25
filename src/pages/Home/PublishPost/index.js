import { useState } from "react";
import { useLocation } from "react-router";
import useApi from "../../../hooks/useApi";
import useMenu from "../../../hooks/useMenu";
import usePost from "../../../hooks/usePost";
import useAuth from "../../../hooks/useAuth";

import ProfilePicture from "../../../components/profilePicture";
import { fireAlert } from "../../../utils/alerts";
import { 
  Button, 
  Container, 
  ContainerProfilePicture, 
  Description, 
  Input, 
  TextArea } from "./style";

export default function PublishPost() {
  const [formData, setFormData] = useState({
    url: "",
    description: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { auth } = useAuth();
  const { pathname } = useLocation();
  const api = useApi();
  const { reloadPage, setReloadPage } = usePost();

  const headers = {
    headers: {
      Authorization: `Bearer ${auth?.token}`
    }
  }
  const { handleHideLogout } = useMenu();

  function handleInputChange({ target }) {
    setFormData({ ...formData, [target.name]: target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!formData.url) {
      return;
    }

    setIsLoading(true);

    try {
      await api.posts.publish(formData, headers);
      setFormData({
        url: "",
        description: "",
      });
      setReloadPage(!reloadPage);
    } catch (error) {
      fireAlert(error.response.data);
    }

    setIsLoading(false);
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
          name="description"
          value={formData.description}
          placeholder="Awesome article about #javascript"
          onChange={handleInputChange}
          disabled={isLoading}
        />

        <Button disabled={isLoading}>
          {isLoading ? "Publishing..." : "Publish"}
        </Button>
      </form>
    </Container>
  );
}
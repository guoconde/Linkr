import { useState, } from "react";
import { useLocation, useNavigate } from "react-router";
import { fireAlert } from "../../../utils/alerts";
import useApi from "../../../hooks/useApi";
import useMenu from "../../../hooks/useMenu";
import useAuth from "../../../hooks/useAuth";
import usePost from "../../../hooks/usePost";
import ProfilePicture from "../../../components/ProfilePicture";
import { 
  Button, 
  Container, 
  ContainerProfilePicture, 
  Description, 
  Input, 
  TextArea 
} from "./style";

export default function PublishPost() {
  const [formData, setFormData] = useState({ url: "", description: "", });
  const [isLoading, setIsLoading] = useState(false);
  const { pathname } = useLocation();
  const { auth, logout } = useAuth();
  const { reloadPage, setReloadPage } = usePost();
  const { handleHideLogout } = useMenu();
  const api = useApi();
  const navigate = useNavigate();

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
      const headers = { headers: { Authorization: `Bearer ${auth?.token}` } }

      await api.posts.publish(formData, headers);
      setFormData({ url: "", description: "", });
      setReloadPage(!reloadPage);
    } catch (error) {
      await fireAlert(error.response.data);
      if(error.response.status === 401) {
        logout();
        return navigate("/");
      }
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

        <Button disabled={isLoading} onClick={() => setReloadPage(!reloadPage)}>
          {isLoading ? "Publishing..." : "Publish"}
        </Button>
      </form>
    </Container>
  );
}
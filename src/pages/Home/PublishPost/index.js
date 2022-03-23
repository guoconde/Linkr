import { useState, useContext } from "react";
import ProfilePicture from "../../../components/profilePicture";
import useApi from "../../../hooks/useApi";
import useMenu from "../../../hooks/useMenu";
import { Button, Container, Description, Input, TextArea } from "./style";
import AuthContext from "../../../contexts/AuthContext";
import { fireAlert } from "../../../utils/alerts";
import AllPosts from "../AllPosts";

export default function PublishPost() {
  const [formData, setFormData] = useState({
    url: "",
    description: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { auth } = useContext(AuthContext);
  const api = useApi();
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

    } catch (error) {
      fireAlert(error.response.data);
    }

    setIsLoading(false);
  }

  return (
    <>
      <Container onClick={() => handleHideLogout()}>
        <ProfilePicture />

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
      <AllPosts></AllPosts>
    </>
  );
}
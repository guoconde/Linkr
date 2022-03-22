import { useState } from "react";
import ProfilePicture from "../../../components/profilePicture";
import { Button, Container, Description, Input, TextArea } from "./style";

export default function PublishPost() {
  const [formData, setFormData] = useState({
    url: "",
    description: "",
  });

  function handleInputChange({ target }) {
    setFormData({ ...formData, [target.name]: target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <Container>
      <ProfilePicture />

      <form onSubmit={handleSubmit}>
        <Description>What are you going to share today?</Description>

        <Input
          type="url"
          name="url"
          value={formData.url}
          placeholder="http://..."
          onChange={handleInputChange}
        />
        
        <TextArea
          name="description"
          value={formData.description}
          placeholder="Awesome article about #javascript"
          onChange={handleInputChange}
        />

        <Button>Publish</Button>
      </form>
    </Container>
  );
}
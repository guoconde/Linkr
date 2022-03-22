import { useState } from "react";
import { AuthContainer, SloganSide, Logo, Slogan, FormSide } from "../../components/AuthScreenComponents"
import { Form, Input, Button, StyledLink } from "../../components/FormComponents";

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [picture, setPicture] = useState('');
  const [isLoading, setIsloading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <AuthContainer>
      <SloganSide>
        <Logo>linkr</Logo>
        <Slogan>save, share and discover <br /> the best links on the web</Slogan>
      </SloganSide>

      <FormSide>
        <Form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="e-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <Input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
          <Input
            type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            required
          />
          <Input
            type="text"
            placeholder="picture url"
            onChange={(e) => setPicture(e.target.value)}
            value={picture}
          />

          <Button type="submit">
            {isLoading ?
              "Loading..."
              :
              "Sign Up"
            }
          </Button>
          <StyledLink to="/">Switch back to log in</StyledLink>
        </Form>
      </FormSide>
    </AuthContainer>
  );
}
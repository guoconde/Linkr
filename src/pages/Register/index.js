import { AuthContainer, SloganSide, Logo, Slogan, FormSide } from "../../components/AuthScreenComponents"
import { Form, Input, Button, StyledLink } from "../../components/FormComponents";

export default function Register() {
  return (
    <AuthContainer>
      <SloganSide>
        <Logo>linkr</Logo>
        <Slogan>save, share and discover <br /> the best links on the web</Slogan>
      </SloganSide>

      <FormSide>
        <Form>
          <Input placeholder="e-mail"></Input>
          <Input placeholder="password"></Input>
          <Input placeholder="username"></Input>
          <Input placeholder="picture url"></Input>

          <Button>Sign Up</Button>
          <StyledLink to="/">Switch back to log in</StyledLink>
        </Form>
      </FormSide>
    </AuthContainer>
  );
}
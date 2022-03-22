import { AuthContainer, SloganSide, Logo, Slogan, FormSide } from "../../components/AuthScreenComponents"
import {  Form, Input, Button, StyledLink } from "../../components/FormComponents";

export default function Login() {
    return (
      <AuthContainer>

        <SloganSide>
          <Logo>linkr</Logo>
          <Slogan>save, share and discover <br/> the best links on the web</Slogan>
        </SloganSide>

        <FormSide>
          <Form>
            <Input placeholder="e-mail"></Input>
            <Input placeholder="password"></Input>
            <Button>Log In</Button>
            <StyledLink to="/">First time? Create an account!</StyledLink>
          </Form>
        </FormSide>
        
      </AuthContainer>
    );
  }
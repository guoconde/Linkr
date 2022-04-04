import { useState } from "react";
import { useNavigate } from "react-router";
import { ThreeDots } from "react-loader-spinner";
import { fireAlert } from "../../utils/alerts";
import useApi from "../../hooks/useApi";
import { Form, Input, Button, StyledLink } from "../../components/FormComponents";
import { 
  AuthContainer, 
  SloganSide, 
  Logo, 
  Slogan, 
  FormSide 
} from "../../components/AuthScreenComponents";

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [picture, setPicture] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const api = useApi();

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formData = { email, password,  username, picture }
      
      if(email === '' || password === '' || username === ''){
        fireAlert("There are empty fields, fill them all to continue!");
        setIsLoading(false);
        return;
      }

      await api.user.register(formData);

      setIsLoading(false);
      navigate("/");
    } catch (error) {
      setIsLoading(false);

      if(error.response.status === 409){
        fireAlert("This email is already in use! Try again!");
      }else{
        fireAlert(error.response.data);
      }
    }
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
            disabled={isLoading}
          />
          <Input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            disabled={isLoading}
          />
          <Input
            type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            disabled={isLoading}
          />
          <Input
            type="text"
            placeholder="picture url"
            onChange={(e) => setPicture(e.target.value)}
            disabled={isLoading}
            value={picture}
          />

          <Button type="submit" disabled={isLoading}>
            {isLoading ?
              <ThreeDots type="ThreeDots" color="#FFFFFF" height={50} width={50} />
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
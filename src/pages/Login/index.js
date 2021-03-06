import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { ThreeDots } from 'react-loader-spinner';
import { fireAlert } from "../../utils/alerts";
import useApi from "../../hooks/useApi";
import useContexts from "../../hooks/useContexts";
import { Form, Input, Button, StyledLink } from "../../components/FormComponents";
import {
  AuthContainer,
  SloganSide,
  Logo,
  Slogan,
  FormSide
} from "../../components/AuthScreenComponents";

export default function Login() {
  const api = useApi();
  const contexts = useContexts()
  const { auth, login } = contexts.auth
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (auth) navigate("/timeline");

    //eslint-disable-next-line
  }, [])

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    if (!formData.email || !formData.password) {
      setIsLoading(false);
      return fireAlert("Fill in all fields");
    }

    try {
      const { data } = await api.auth.login(formData);
      login(data);
      setIsLoading(false);
      navigate("/timeline");
    } catch (error) {
      setIsLoading(false);
      fireAlert(error.response.data);
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
            name="email"
            onChange={handleChange}
            value={formData.email}
            disabled={isLoading}
          />
          <Input
            type="password"
            placeholder="password"
            name="password"
            onChange={handleChange}
            value={formData.password}
            disabled={isLoading}
          />

          <Button type="submit" disabled={isLoading}>
            {
              isLoading
                ? <ThreeDots type="ThreeDots" color="#FFFFFF" height={50} width={50} />
                : "Log In"
            }
          </Button>

          <StyledLink to="/sign-up">
            First time? Create an account!
          </StyledLink>
        </Form>
      </FormSide>
    </AuthContainer>
  );
}
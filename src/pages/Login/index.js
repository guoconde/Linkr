import { useEffect, useState } from "react";
import { ThreeDots } from 'react-loader-spinner';
import { useNavigate } from "react-router";
import { AuthContainer, SloganSide, Logo, Slogan, FormSide } from "../../components/AuthScreenComponents"
import { Form, Input, Button, StyledLink } from "../../components/FormComponents";
import useApi from "../../hooks/useApi";
import useAuth from "../../hooks/useAuth";
import { fireAlert } from "../../utils/alerts";

export default function Login() {
  const navigate = useNavigate();
  const api = useApi()
  const { auth, login } = useAuth()
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (auth) navigate("/timeline")
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
      return fireAlert("Fill in all fields")
    }

    try {
      const { data } = await api.auth.login(formData)
      login(data)
      setIsLoading(false);
      navigate("/timeline");
    } catch (error) {
      setIsLoading(false);
      fireAlert(error.response.data)
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
            placeholder="E-mail"
            name="email"
            onChange={handleChange}
            value={formData.email}
            disabled={isLoading}
          />
          <Input
            type="password"
            placeholder="Senha"
            name="password"
            onChange={handleChange}
            value={formData.password}
            disabled={isLoading}
          />

          <Button type="submit" disabled={isLoading}>
            {
              isLoading
                ? <ThreeDots type="ThreeDots" color="#FFFFFF" height={50} width={50} />
                : "Entrar"
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
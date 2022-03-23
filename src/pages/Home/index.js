import PublishPost from "./PublishPost";
import { Container, Content, TitleOfSection } from "./style";
import useMenu from "../../hooks/useMenu";

export default function Home() {
  const { handleHideLogout } = useMenu();

  return (
    <Container onClick={() => handleHideLogout()}>
      <Content>
        <TitleOfSection>timeline</TitleOfSection>
        <PublishPost />
      </Content>
    </Container>
  );
}
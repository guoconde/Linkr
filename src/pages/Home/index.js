import PublishPost from "./PublishPost";
import { Container, Content } from "./style";
import useMenu from "../../hooks/useMenu";

export default function Home() {
  const { handleHideLogout } = useMenu();

  return (
    <Container onClick={() => handleHideLogout()}>
      <Content>
        <PublishPost />
      </Content>
    </Container>
  );
}
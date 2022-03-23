import PublishPost from "./PublishPost";
import Trendings from "./Trendings";
import { Container, Content, ContainerFeed, TitleOfSection } from "./style";
import useMenu from "../../hooks/useMenu";

export default function Home() {
  const { handleHideLogout } = useMenu();

  return (
    <Container onClick={() => handleHideLogout()}>
      <Content>
        <ContainerFeed>
          <TitleOfSection>timeline</TitleOfSection>
          <PublishPost />
        </ContainerFeed>

        <Trendings />
      </Content>
    </Container>
  );
}
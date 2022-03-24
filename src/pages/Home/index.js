import PublishPost from "./PublishPost";
import Trendings from "./Trendings";
import {
  Container,
  Content,
  TitleOfSection
} from "./style";
import useMenu from "../../hooks/useMenu";
import AllPosts from "./AllPosts";

export default function Home() {
  const { handleHideLogout } = useMenu();

  return (
    <Container onClick={() => handleHideLogout()}>
      <Content>
        <TitleOfSection>timeline</TitleOfSection>
        <PublishPost />
        <AllPosts />
      </Content>
      <Trendings />
    </Container>
  );
}

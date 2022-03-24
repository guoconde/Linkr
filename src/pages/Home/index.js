import PublishPost from "./PublishPost";
import Trendings from "./Trendings";
import {
  Container,
  Content,
  TimelineTitle,
  ContainerFeed,
  ContainerTrendings,
  ContainerTimeLine
} from "./style";
import useMenu from "../../hooks/useMenu";
import AllPosts from "./AllPosts";

export default function Home() {
  const { handleHideLogout } = useMenu();

  return (
    <Container onClick={() => handleHideLogout()}>
      <Content>
        <TimelineTitle>timeline</TimelineTitle>

        <ContainerTimeLine>
          <ContainerFeed>
            <PublishPost />
            <AllPosts></AllPosts>
          </ContainerFeed>

          <ContainerTrendings>
            <Trendings />
          </ContainerTrendings>
        </ContainerTimeLine>
      </Content>
    </Container>
  );
}
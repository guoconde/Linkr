import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { fireAlert } from "../../../utils/alerts";
import { TailSpin } from "react-loader-spinner";
import useApi from "../../../hooks/useApi";
import useContexts from "../../../hooks/useContexts";
import {
  Container,
  Content,
  Divider,
  TitleContainer,
  Title,
  HashtagsContainer,
  HashtagLink
} from "./style";

export default function Trendings() {
  const api = useApi();
  const contexts = useContexts();
  const { auth, logout } = contexts.auth;
  const { reloadPage } = contexts.post;
  const [trendings, setTrendings] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    handleTrendings();
    
    // eslint-disable-next-line
  }, [reloadPage]);

  async function handleTrendings() {
    const headers = { headers: { Authorization: `Bearer ${auth?.token}` } };

    try {
      const { data } = await api.hashtags.getHashtags(headers);
      setTrendings(data);
    } catch (error) {
      if (error.response?.status === 401) {
        await fireAlert(error.response.data);
        logout();
        navigate("/");
      }
    }
  }

  if (trendings === null) {
    return (
      <Container>
        <TitleContainer>
          <Title>trending</Title>
        </TitleContainer>

        <Divider />

        <HashtagsContainer>
          <Content>
            <TailSpin color="white" ariaLabel="loading-indicator" />
            <div>Loading...</div>
          </Content>
        </HashtagsContainer>
      </Container>
    );
  }

  const trendingsReader = trendings.map((hashtag) => {
    return (
      <HashtagLink key={hashtag.id} to={`/hashtag/${hashtag.name.slice(1)}`}>
        {hashtag.name}
      </HashtagLink>
    );
  })

  return (
    <Container>
      <TitleContainer>
        <Title>trending</Title>
      </TitleContainer>

      <Divider />

      <HashtagsContainer>
        {trendingsReader.length ? trendingsReader : "There are no posts yet!"}
      </HashtagsContainer>
    </Container>
  );
}
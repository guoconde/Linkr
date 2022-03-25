import { useEffect, useState } from "react";
import useApi from "../../../hooks/useApi";
import useAuth from "../../../hooks/useAuth";
import usePost from "../../../hooks/usePost";

import { Container, Divider, TitleContainer, Title, HashtagsContainer, HashtagLink } from "./style";

export default function Trendings() {
  const api = useApi();
  const { auth } = useAuth();
  const [trendings, setTrendings] = useState([]);
  const { reloadPage } = usePost();

  useEffect(() => {
    handleTrendings();
    //eslint-disable-next-line
  }, [reloadPage]);

  async function handleTrendings() {
    const headers = {
      headers: {
        Authorization: `Bearer ${auth?.token}`
      }
    }

    try {
      const { data } = await api.hashtags.getHashtags(headers);

      setTrendings(data);
    } catch (error) {
      console.log(error.response.data);
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
          Loading...
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
        {trendingsReader}
      </HashtagsContainer>
    </Container>
  );
}
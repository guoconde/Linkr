import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { fireAlert } from "../../../utils/alerts";
import useApi from "../../../hooks/useApi";
import useAuth from "../../../hooks/useAuth";
import usePost from "../../../hooks/usePost";

import { Container, Divider, TitleContainer, Title, HashtagsContainer, HashtagLink } from "./style";

export default function Trendings() {
  const api = useApi();
  const { auth, logout } = useAuth();
  const [trendings, setTrendings] = useState([]);
  const { reloadPage } = usePost();
  const navigate = useNavigate();

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
      if(error.response?.status === 401) {
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
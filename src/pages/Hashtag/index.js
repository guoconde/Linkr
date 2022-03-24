import { Container, Content, Feed, Trending } from "./style";
import useMenu from "../../hooks/useMenu";
import { useEffect } from "react/cjs/react.development";
import { useContext, useState } from "react";
import AuthContext from "../../contexts/AuthContext";
import useApi from "../../hooks/useApi";
import { useLocation, useNavigate } from "react-router";
import { HashtagTitle } from "./style";

export default function Hashtag() {
  const { handleHideLogout } = useMenu();
  const { auth } = useContext(AuthContext);
  const { pathname } = useLocation();
  const [ posts, setPosts ] = useState([])
  const api = useApi()
  const navigate = useNavigate()
  const hashtag = pathname.split("/")[2]
  

  useEffect( () => {
    if(!auth) navigate("/")
    async function getData(){
        const headers = { headers: { Authorization: `Bearer ${auth?.token}` }}
        try{
            const { data } = await api.feed.listByHashtag(hashtag, headers)
            setPosts(data)
        }catch(error){
            console.log(error.response)
        }
    }
    getData()
    //eslint-disable-next-line
  },[])

  console.log(posts)

  return (
    <Container onClick={() => handleHideLogout()}>
        <HashtagTitle># {hashtag}</HashtagTitle>
        <Content>
          <Feed>s</Feed>
          <Trending>d</Trending>
        </Content>
    </Container>
  );
}
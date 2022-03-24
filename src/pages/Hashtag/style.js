import styled from "styled-components";

const Container = styled.div`
  width: 60%;
  margin: 0 auto;
  padding-top:125px;

  background-color: #333333;
  font-family: "Lato", sans-serif;
`;

const Content = styled.div`
  display:flex;
  justify-content: space-between;
`;
const Feed = styled.div`
  width:65%;
  background:#fff;
`;
const Trending = styled.div`
  width:33%;
  background:#ddd;
`;

const HashtagTitle = styled.h1`
  font-family: 'Oswald';
  font-weight: bold;
  font-size: 43px;
  line-height: 64px;
  color: #FFFFFF;
`;

export { Container, Content, HashtagTitle, Trending, Feed };

import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 301px;
  height: 406px;
  margin-top: 100px;

  background: #171717;
  border-radius: 16px;
  
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const Divider = styled.hr`
  height: 1px;

  background-color: #484848;

  border: none;
`;

const TitleContainer = styled.div`
  width: 100%;
  height: 40px;

  margin-bottom: 30px;
`;

const Title = styled.h2`
  padding: 15px;

  font-family: 'Oswald';
  font-weight: 700;
  font-size: 27px;
  line-height: 40px;

  color: #FFFFFF;
`;

const HashtagsContainer = styled.div`
  width: 100%;

  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 19px;
  line-height: 23px;
  letter-spacing: 0.05em;

  color: #FFFFFF;

  padding: 15px;

  display: flex;
  flex-direction: column;
`;

const HashtagLink = styled(Link)`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 19px;
  line-height: 23px;
  letter-spacing: 0.05em;

  margin-bottom: 8px;

  color: #FFFFFF;
`;

export {
  Container,
  Divider,
  TitleContainer,
  Title,
  HashtagsContainer,
  HashtagLink
}
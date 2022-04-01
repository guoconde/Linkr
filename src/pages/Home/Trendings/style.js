import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 301px;
  height: 406px;

  background: #171717;
  border-radius: 16px;
  
  position: sticky;
  top: 100px;
  
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
  height: 80%;

  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 19px;
  line-height: 23px;
  letter-spacing: 0.05em;

  overflow-y: scroll;

  color: #FFFFFF;

  padding: 15px;

  display: flex;
  flex-direction: column;

  /* width */
  ::-webkit-scrollbar {
    width: 3px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: transparent;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background-color:rgba(128,128,128,0.4);
    border-radius: 10px;
  }
`;

const HashtagLink = styled(Link)`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 19px;
  line-height: 23px;
  letter-spacing: 0.05em;
  word-break: break-all;

  margin-bottom: 8px;
  transition: all 0.15s ease;

  &:hover {
    color: #0082fc;
  }

  color: #FFFFFF;
`;

const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    color: #fff;

    font-family: Lato;
    font-size: 17px;
    font-weight: 400;
    line-height: 20px;

    margin-top: 30px;
`;

export {
  Container,
  Content,
  Divider,
  TitleContainer,
  Title,
  HashtagsContainer,
  HashtagLink
}
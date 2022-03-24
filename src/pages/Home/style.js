import styled from "styled-components";

const Container = styled.div`
  width: 100%;

  margin-top: 120px;

  display: flex;
  justify-content: center;

  font-family: "Lato", sans-serif;
`;

const Content = styled.div`
  width: 610px;

  margin-right: 25px;

  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1000px) {
    margin-right: 0px;
  }
  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

const TitleOfSection = styled.h2`
  color: #FFFFFF;
  font-family: 'Oswald';
  font-weight: 700;
  font-size: 43px;
  line-height: 64px;

  margin-bottom: 40px;
  align-self: flex-start;

  @media screen and (max-width: 650px) {
    margin-top: 19px;
    margin-left: 18px;
  }
`;

export { 
  Container, 
  Content, 
  TitleOfSection
};

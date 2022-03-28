import styled from "styled-components";

const Container = styled.div`
  width: 100%;

  margin-top: 120px;

  display: flex;
  justify-content: center;

  font-family: "Lato", sans-serif;

  @media screen and (max-width: 900px) {
    margin-top: 15px;
  }
`;

const Content = styled.div`
  width: 610px;

  margin-right: 25px;
  margin-bottom: 60px;

  display: flex;
  flex-direction: column;

  @media screen and (max-width: 900px) {
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

  align-self: flex-start;

  @media screen and (max-width: 900px) {
    font-size: 33px;
  }

  @media screen and (max-width: 650px) {
    margin-left: 18px;
  }
`;

const ContainerTitleProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;

  margin-bottom: 40px;

  @media screen and (max-width: 900px) {
    margin-bottom: 5px;
  }
`;

export { 
  Container, 
  ContainerTitleProfile,
  Content, 
  TitleOfSection
};

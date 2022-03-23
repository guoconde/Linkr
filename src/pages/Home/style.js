import styled from "styled-components";

const Container = styled.div`
  width: 100%;

  margin: 120px auto 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  font-family: "Lato", sans-serif;
`;

const Content = styled.div`
  width: 100%;

  display: flex;
  align-items: start;
  justify-content: center;
`;

const TitleOfSection = styled.h2`
  color: #FFFFFF;
  font-family: 'Oswald';
  font-weight: 700;
  font-size: 43px;
  line-height: 64px;

  margin-bottom: 40px;
  align-self: flex-start;

  @media screen and (max-width: 610px) {
    margin-top: 19px;
    margin-left: 18px;
  }
`;

const ContainerFeed = styled.div`
  margin-right: 20px;
`;

export { Container, Content, ContainerFeed, TitleOfSection };

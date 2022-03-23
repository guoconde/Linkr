import styled from "styled-components";

const Container = styled.div`
  width: 100%;

  margin-top: 72px;

  display: flex;
  justify-content: center;

  font-family: "Lato", sans-serif;
`;

const Content = styled.main`
  width: 612px;

  margin-top: 53px;

  display: flex;
  flex-direction: column;
  align-items: center;
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

export { Container, Content, TitleOfSection};

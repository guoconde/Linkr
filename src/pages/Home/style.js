import styled from "styled-components";

const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #333333;
  font-family: "Lato", sans-serif;
`;

const Content = styled.div`
  width: 70%;

  padding-top: 150px;

  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
`;

const ContainerFeed = styled.div`
  margin-right: 25px;

  width: 65%;
`;

const ContainerTrendings = styled.div`
  height: 100%;

  width: 35%;
`;

const ContainerTimeLine = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
`;

const TimelineTitle = styled.div`
  font-family: Oswald;
  font-size: 43px;
  font-weight: 700;
  line-height: 64px;
  color: white;
  margin-bottom: 43px;
`;

export { 
  Container, 
  Content, 
  TimelineTitle, 
  ContainerFeed, 
  ContainerTrendings,
  ContainerTimeLine 
};

import styled from "styled-components";

const Container = styled.div`
  width: 100%;

  margin-top: 120px;

  font-family: "Lato", sans-serif;

  display: flex;
  justify-content: center;

  .main {
    display: flex;
  }

  .styles_scroll-to-top__2A70v{
    background-color: #171717;

    transition: all 0.3s ease-in-out;

    box-shadow: 0 9px 25px 0 rgb(0 0 0 / 28%);

    &:hover{
      background-color: #484848;
    }
  }

  @media screen and (max-width: 900px) {
    margin-top: 15px;
    
    .styles_scroll-to-top__2A70v{
      display: none;
    }
  }

  @media screen and (max-width: 650px){
    .all {
      width: 100%;
    }

    .main {
      justify-content: center;
      width: 100%;
    }

    .styles_scroll-to-top__2A70v{
      display: none;
    }
  }
`;

const Content = styled.div`
  width: 610px;

  margin-right: 25px;
  margin-bottom: 60px;

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

  align-self: flex-start;

  @media screen and (max-width: 900px) {
    font-size: 33px;
  }

  @media screen and (max-width: 650px) {
    margin-left: 18px;
    margin-bottom: 15px;
    line-height: 44px;
  }
`;

const ContainerTitleProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .info {
    display: flex;
    align-items: center;
  }
  margin-bottom: 40px;

  @media screen and (max-width: 900px) {
    margin-bottom: 5px;
  }
  @media screen and (max-width: 650px) {
    padding-right: 18px;
  }
`;

const FollowButton = styled.button`
  width: 112px;
  height: 31px;
  margin-left: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.isFollowing ? "#FFF" : "#1877F2"};
  border-radius: 5px;
  border: none;

  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  text-align: center;
  color: ${(props) => props.isFollowing ? "#1877F2" : "#FFF"};

  cursor: pointer;
  ${(props) => props.isFollowing === null && "display: none;"}
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

export {
  Container,
  ContainerTitleProfile,
  Content,
  TitleOfSection,
  FollowButton
}
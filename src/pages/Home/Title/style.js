import styled from "styled-components";

const TitleOfSection = styled.h2`
  color: #ffffff;
  font-family: "Oswald";
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

  background: ${(props) => (props.isFollowing ? "#FFF" : "#1877F2")};
  border-radius: 5px;
  border: none;

  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  text-align: center;
  color: ${(props) => (props.isFollowing ? "#1877F2" : "#FFF")};

  cursor: pointer;
  ${(props) => props.isFollowing === null && "display: none;"}
  transition: all 0.3s ease;
  opacity: ${(props) => props.disabled ? "0.7": "1"};

  &:hover {
    transform: scale(1.2);
  }
`;

export { ContainerTitleProfile, TitleOfSection, FollowButton };

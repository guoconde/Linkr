import styled from "styled-components";

const TimeLine = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
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

  .message {
    text-align: center;
  }
`;

const FullPost = styled.div``;

const RepostedBy = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 13px;
  color: #fff;

  background: #1e1e1e;
  margin-bottom: -12px;
  padding: 6px 0 15px 10px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;

  span {
    font-weight: bold;
  }
`;

const ContainerNewPosts = styled.div`
  width: 100%;
  height: 61px;

  background: #1877f2;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  color: white;

  cursor: pointer;

  @media screen and (max-width: 650px) {
    border-radius: 0;
  }
`;

export { TimeLine, Content, FullPost, RepostedBy, ContainerNewPosts };

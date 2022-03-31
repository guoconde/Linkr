import styled from "styled-components";

const CommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

const CommentsCounter = styled.p`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 13px;
  text-align: center;

  color: #FFFFFF;

  @media screen and (max-width: 900px){
    font-size: 9px;
  }
`;

export {
  CommentsContainer,
  CommentsCounter
}
import styled from "styled-components";

const LoadCommentsContainer = styled.div`
  max-height: 250px;
  overflow-y: scroll;

  @media screen and (min-width: 1000px){
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
      background-color: rgba(128,128,128,0.4);
      border-radius: 10px;
    }
  }
`;

const ContentComments = styled.div`
  width: 100%;

  position: relative;

  padding: 25px 20px;
  margin-top: -20px;

  background: #1E1E1E;
  border-radius: 0 0 16px 16px;

  .no-comments{
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
  
    color: #ACACAC;

    margin-top: 15px;
    padding-bottom: 65px;

    .no-comments-message{
      margin-bottom: 10px;
    }

    .no-comments-divider{
      height: 1px;
      background-color: #484848;
      border: none;
    }
  }

  @media screen and (max-width: 650px){
    border-radius: 0;
    width: 100%;
  }
`;

const ContainerCommentInput = styled.div`
  position: absolute;
  bottom: 25px;
  left: 20px;

  width: 93%;

  margin-top: 19px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 14px;

  @media screen and (max-width: 650px){
    border-radius: 0;
    width: 90%;
  }

  .fisend-icon{
    position: absolute;
    top: 11px;
    right: 15px;

    cursor: pointer;
  }
`;

const CommentInput = styled.input`
  width: 90%;
  height: 39px;

  position: relative;

  border: 0;
  border-radius: 8px;

  padding: 11px 45px 11px 15px;

  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;

  background-color: #252525;
  opacity: ${(props) => props.disabled ? "0.7" : "1"};
  color: ${(props) => props.disabled ? "#AFAFAF" : "#ACACAC"};

  pointer-events: ${(props) => props.disabled ? "none" : "all"};

  &::placeholder{
    font-family: 'Lato';
    font-style: italic;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.05em;

    color: #575757;
  }
`;

const ContainerCommentInputExtends = styled.div`
  position: relative;
  width: 100%;

  margin-top: 19px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 14px;

  @media screen and (max-width: 650px){
    border-radius: 0;
  }

  .fisend-icon-extends{
    position: absolute;
    top: 11px;
    right: 15px;

    cursor: pointer;

    &:active{
      transform: scale(1.2);
    }
  }
`;

const CommentInputExtends = styled.input`
  width: 90%;
  height: 39px;

  position: relative;

  background-color: #252525;
  opacity: ${(props) => props.disabled ? "0.7" : "1"};
  color: ${(props) => props.disabled ? "#AFAFAF" : "#ACACAC"};

  pointer-events: ${(props) => props.disabled ? "none" : "all"};

  border: 0;
  border-radius: 8px;

  padding: 11px 45px 11px 15px;

  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;

  color: #ACACAC;

  &::placeholder{
    font-family: 'Lato';
    font-style: italic;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.05em;

    color: #575757;
  }
`;

export {
  ContentComments,
  ContainerCommentInput,
  CommentInput,
  ContainerCommentInputExtends,
  CommentInputExtends,
  LoadCommentsContainer
}
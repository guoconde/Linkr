import styled from "styled-components";

const ContainerCommentLine = styled.div`
  width: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  padding: 15px 0 19px 0;

  border-bottom: 1px solid #353535;
`;

const InfoTag = styled.span`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;

  color: #565656;

  margin-left: 4px;
`;

const DescriptionCommentLine = styled.div`
  margin-left: 18px;

  width: 90%;
`;

const NameCommentLine = styled.h3`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;

  color: #F3F3F3;

  .name-comentline-user-name{
    color: #F3F3F3;
    text-decoration: none;
  }
`;

const MessageCommentLine = styled.p`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  word-break: break-word;

  color: #ACACAC;

  margin-top: 5px;
`;

export {
  ContainerCommentLine,
  DescriptionCommentLine,
  NameCommentLine,
  MessageCommentLine,
  InfoTag
}
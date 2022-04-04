import styled from "styled-components";
import { Link } from "react-router-dom";
import { GrEdit } from 'react-icons/gr';

const Container = styled.li`
  width: 100%;

  position: relative;
  padding: 20px;

  background: #171717;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;

  display: flex;
  gap: 18px;

  z-index: 2;

  @media screen and (max-width: 650px) {
    border-radius: 0;
  }
`;

const ContainerImage = styled.div`
  width: 11%;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 10px;

  @media screen and (max-width: 900px){
    width: 16%;
  }
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;

  position: ${(props) => props.positionControll ? "absolute" : "inherit"};
  top: ${(props) => props.positionControll ? "0" : "inherit"};
  left: ${(props) => props.positionControll ? "0" : "inherit"};
`;

const ContainerPost = styled.div`
  width: 89%;

  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (max-width: 900px){
    width: 84%;
  }
`;

const Name = styled(Link)`
  font-family: Lato;
  font-size: 19px;
  font-weight: 400;
  line-height: 23px;
  color: #fff;
  transition: all 0.3s ease;

  &:hover {
    color: #dbdbdb;
  }
`;

const Description = styled.div`
  font-family: Lato;
  font-size: 17px;
  font-weight: 400;
  line-height: 20px;
  word-break: break-word;

  color: #B7B7B7;
`;

const MetaLink = styled.div`
  width: 100%;
  min-height: 155px;

  border: 1px solid #4d4d44;
  border-radius: 11px;

  overflow: hidden;
  position: relative;

  @media screen and (max-width: 900px) {
    min-height: 115px;
  }
  
  .infoPost {
    width: 65%;
    height: 100%;
    font-family: Lato;
    color: #CECECE;

    padding: 25px;

    display: flex;
    flex-direction: column;
    gap: 10px;

    @media screen and (max-width: 900px) {
      padding: 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 400;
      line-height: 19px;

      display: -webkit-box;
      overflow: hidden;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }

    .description {
      font-size: 11px;
      font-weight: 400;
      line-height: 13px;
      color: #9B9595;

      display: -webkit-box;
      overflow: hidden;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
  }
`;

const ExternalLink = styled.a`
  all: unset;
  font-size: 11px;
  font-weight: 400;
  line-height: 13px;

  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  transition: all 0.3s ease;
  
  cursor: pointer;

  &:hover{
    color: #FFFFFF;
  }
`;

const ImagePost = styled.div`
  width: 155px;
  height: 100%;

  background: url(${props => props.backgroundImage}) no-repeat;
  background-size: 155px 100%;

  position: absolute;
  right: 0;
  top: 0;

  @media screen and (max-width: 900px) {
    width: 95px;
    background-size: 95px 100%;
  }
`;

const ContainerAction = styled.div`
  position: absolute;
  right: 50px;
  top: 20px;
`;

const GrEditCustom = styled(GrEdit)`
  > * {
    fill: transparent;
    stroke: #FFFFFF;
    cursor: pointer;
  }
`;

export {
  Container,
  ContainerPost,
  ContainerImage,
  Image,
  Name,
  Description,
  ExternalLink,
  MetaLink,
  ImagePost,
  ContainerAction,
  GrEditCustom
}
import styled from "styled-components";
import { AiFillDelete } from "react-icons/ai";

const Title = styled.p`
  color: #ffffff;
  font-weight: 700;
  font-size: 34px;
  line-height: 41px;
  text-align: center;

  margin-bottom: 40px;

  @media screen and (max-width: 500px) {
    font-size: 25px;
    line-height: 25px;
  }
`;

const SectionButton = styled.div`
  display: flex;
  gap: 25px;

  @media screen and (max-width: 320px) {
    flex-direction: column;
  }
`;

const Button = styled.button`
  width: 134px;
  height: 37px;

  color: ${(props) => props.color};
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;

  background-color: ${(props) => (props.color === "#FFF" ? "#1877F2" : "#FFF")};
  border-radius: 5px;
  border: none;
  transition: all 0.3s ease-in;

  &:hover {
    cursor: pointer;
    transform: scale(1.3);
  }

  @media screen and (max-width: 500px) {
    width: 90px;
    height: 50px;
  }
`;

const Trash = styled(AiFillDelete)`
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 20px;
  z-index: 1;
  
  font-size: 20px;
  color: #fff;

  transition: all 0.3s ease-in-out;

  display: ${(props) => (props.authid === props.userid) && !props.sharerid ? "block": "none"};

  &:hover{
    color: #dc3545;
  }
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
`;

export {
  Trash,
  Title,
  Button,
  SectionButton,
  Content
};
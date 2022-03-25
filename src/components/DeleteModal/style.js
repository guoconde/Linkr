import { BsFillTrashFill } from "react-icons/bs";
import styled from "styled-components";

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
    width: 80px;
    height: 50px;
  }
`;

const Trash = styled(BsFillTrashFill)`
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 20px;
  font-size: 15px;
  color: #fff;

  display: ${(props) => props.authId === props.userId ? "block": "none"};
`;

export {
  Trash,
  Title,
  Button,
  SectionButton
};
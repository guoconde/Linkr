import styled from "styled-components";
import { MdLocationOn } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const ModalMapContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 4;
  background-color: rgba(255, 255, 255, 0.9);

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;
`;

const ModalMapContent = styled.div`
  position: relative;
  width: 80vw;
  height: 80vh;
  background-color: #333333;


  padding: 25px;
  border-radius: 50px;

  display: flex;
  flex-direction: column; 
  align-items: center;
  justify-content: flex-start;

  color: "#FFFFFF";
`;

const StyledMdLocationOn = styled(MdLocationOn)`
  color: red;
  font-size: 30px;
`;

const StyledIoMdClose = styled(IoMdClose)`
  position: absolute;
  top: 25px;
  right: 25px;
  color: #FFFFFF;

  transition: all 0.3s ease-in-out;

  cursor: pointer;

  &:hover{
    color: #dbdbdb;
  }
`;

const UserNameInModal = styled.h2`
  width: 100%;

  color: #FFFFFF;
  font-weight: 700;
  font-size: 20px;
  line-height: 41px;
  text-align: left;
`;

export {
  ModalMapContainer,
  ModalMapContent,
  StyledMdLocationOn,
  StyledIoMdClose,
  UserNameInModal
}
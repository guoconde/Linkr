import styled from "styled-components";
import ImageProfile from "../../../components/ProfilePicture/style";
import { MdLocationOn } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const Container = styled.div`
  width: 100%;
  min-height: 209px;

  padding: 20px;
  margin-bottom: 30px;

  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;

  display: flex;
  align-items: stretch;
  justify-content: space-between;

  form {
    width: 86%;
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media screen and (max-width: 900px){
      width: 81%;
    }
  }
  
  .error-message {
    margin-top: 0.25rem;
    font-size: 80%;
    color: #dc3545;
  }

  @media screen and (max-width: 650px) {
    width: 100%;
    border-radius: 0;
    
    ${ImageProfile} {
      display: none;
      border: 2px solid black;
    }
    
    form {
      width: 100%;
    }
  }
`;

const ContainerProfilePicture = styled.div`
  width: 11%;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  @media screen and (max-width: 900px) {
    width: 17%;
  }

  @media screen  and (max-width: 650px) {
    display: none;
  }
`;

const Description = styled.span`
  display: block;

  align-self: flex-start;
  color: #707070;
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
`;

const Input = styled.input`
  width: 100%;
  height: 30px;

  padding: 5px 13px;
  background-color: #efefef;
  border-radius: 5px;
  border: none;

  color: #949494;
  font-weight: 300;
  font-size: 15px;
  line-height: 18px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 66px;

  background: #efefef;
  border-radius: 5px;
  border: none;
  padding: 15px;

  color: #949494;
  font-weight: 300;
  font-size: 15px;
  line-height: 18px;

  resize: none;
`;

const Button = styled.button`
  width: 112px;
  height: 31px;

  align-self: flex-end;

  background: #1877f2;
  border-radius: 5px;
  border: none;

  color: #ffffff;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;

  transition: all 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: #264057;
  }
`;

const TooltipContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SubmitContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

const ToggleTextLocation = styled.p`
  color: ${(props) => props.error ? "#dc3545" : "#707070"};
`;

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

const UserNameInModal = styled.h2`
  width: 100%;

  color: #FFFFFF;
  font-weight: 700;
  font-size: 20px;
  line-height: 41px;
  text-align: left;
`;

const StyledMdLocationOn = styled(MdLocationOn)`
  color: #d74c3d;
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

export {
  Container,
  ContainerProfilePicture,
  Description,
  TextArea,
  Button,
  Input,
  TooltipContainer,
  SubmitContainer,
  LocationContainer,
  ToggleTextLocation,
  ModalMapContainer,
  ModalMapContent,
  StyledMdLocationOn,
  StyledIoMdClose,
  UserNameInModal
}
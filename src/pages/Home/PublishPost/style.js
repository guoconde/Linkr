import styled from "styled-components";
import { Image } from "../../../components/profilePicture";

const Container = styled.div`
  width: 100%;
  min-height: 209px;

  padding: 20px;

  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;

  display: flex;
  gap: 8px;

  form {
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  @media screen and (max-width: 650px) {
    width: 100%;
    border-radius: 0;
    
    ${Image} {
      display: none;
      border: 2px solid black;
    }
    
    form {
      width: 100%;
    }
  }
`;

const ContainerProfilePicture = styled.div`
  width: 10%;
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

export { 
  Container, 
  ContainerProfilePicture,
  Description, 
  TextArea, 
  Button, 
  Input
 };

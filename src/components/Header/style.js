import styled from "styled-components";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4;

  width: 100%;
  height: 72px;

  padding: 10px 30px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #151515;

  color: #ffffff;
  font-weight: 700;

  @media screen and (max-width: 650px) {
    padding: 10px 18px;
  }
`;

const ContainerMobile = styled.div`
  display: none;

  @media screen and (max-width: 900px) {
    width: 100%;
    height: 45px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 90px;
  }
`;

const Title = styled.h1`
  font-family: "Passion One", cursive;
  font-size: 49px;
  line-height: 54px;
  letter-spacing: 0.05em;
  transition: all 0.3s ease;

  cursor: pointer;
  &:hover {
    color: #dbdbdb;
  }

  &:active {
    transform: scale(1.2);
  }
`;

const UserIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
`;

const DownArrow = styled(BiChevronDown)`
  cursor: pointer;
  color: #fff;
  font-size: 40px;
  transition: all 0.3s ease-in-out;
  transform: ${(props) => props.show && "rotate(180deg)"};

  &:hover {
    color: #1a936f;
    transform: scale(1.2) rotate(180deg);
  }
`;

const Logout = styled.div`
  width: 150px;
  height: 43px;

  position: absolute;
  right: -20px;
  top: 72px;
  z-index: -1;

  background-color: #171717;
  border-radius: 0px 0px 20px 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Lato", sans-serif;
  font-size: 15px;
  line-height: 18px;

  transform: ${(props) => props.show ? "translateY(0px)" : "translateY(-45px)"};
  opacity: ${(props) => (props.show ? "1" : "0")};
  transition: all 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: #51a3a3;
  }
`;

const ContainerInputFindUser = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const ContentMobile = styled.div`
  width: 610px;

  @media screen and (max-width: 650px) {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const ContainerInputFindUserMobile = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 650px) {
    width: 92%;
  }
`;

const InputFindUser = styled.div`
  width: 563px;
  height: 45px;
  position: relative;

  z-index: 3;

  .debounce-input {
    width: 563px;
    height: 45px;
    padding-left: 17px;

    background-color: white;

    border-radius: 8px;
    border: none;

    font-family: Lato;
    font-size: 19px;
    font-weight: 400;
    line-height: 23px;
    color: #515151;

    z-index: 2;

    ::placeholder {
      color: #c6c6c6;
    }
  }

  .list-users {
    display: flex;
    flex-direction: column;
    gap: 16px;

    width: 100%;
    min-height: 45px;
    max-height: 350px;
    overflow-y: scroll;

    padding-top: 30px;
    padding-bottom: 15px;

    border-radius: 8px;
    border: none;

    background-color: #e7e7e7;
    font-weight: regular;

    position: absolute;
    top: 0;
    z-index: -1;

    /* width */
    ::-webkit-scrollbar {
      width: 15px;
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
    
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: transparent; 
    }

    div:first-child {
      margin-top: 30px;
    }

    div {
      padding: 0 10px 0 9px;

      display: flex;
      align-items: center;

      color: #515151;
      cursor: pointer;
    }

    .name {
      margin-left: 30px;

      font-family: 'Lato';
      font-style: normal;
      font-weight: 400;
      font-size: 19px;
      line-height: 23px;

      color: #515151;
    }

    .status {
      padding: 0px;

      .is-following{
        font-family: "Lato";
        font-weight: 400;
        font-size: 19px;
        line-height: 23px;
        color: #c5c5c5;
      }

      .circle {
        padding: 0px;
        margin: 0px;
        margin-right: 7px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: #c5c5c5;
      }
    }

    .listed-user{
      position: relative;
      border-radius: 50px;
      height: 50px;

      margin: 0 17px 0;
      padding: 25px;

      background-color: transparent;
      transition: all .3s ease-in-out;

      &:hover{
        background-color: #afafaf;
      }
    }
  }
`;

const InputFindUserMobile = styled.div`
  width: 100%;
  height: 45px;
  position: relative;

  z-index: 3;

  .debounce-input-mobile {
    width: 100%;
    height: 45px;
    padding-left: 17px;

    background-color: white;

    border-radius: 8px;
    border: none;

    font-family: Lato;
    font-size: 19px;
    font-weight: 400;
    line-height: 23px;
    color: #515151;

    z-index: 2;

    ::placeholder {
      color: #c6c6c6;
    }
  }

  .list-users-mobile {
    display: flex;
    flex-direction: column;
    gap: 16px;

    width: 100%;
    min-height: 45px;
    max-height: 350px;
    overflow-y: scroll;

    margin-top: -45px;
    padding-top: 30px;
    padding-bottom: 15px;

    border-radius: 8px;
    border: none;

    background-color: #e7e7e7;
    font-weight: regular;

    position: absolute;
    z-index: -1;
    
    /* width */
    ::-webkit-scrollbar {
      width: 15px;
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
    
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: transparent; 
    }

    div:first-child {
      margin-top: 30px;
      font-weight: bold;
    }

    div {
      padding: 0 10px 0 9px;

      display: flex;
      align-items: center;

      color: #515151;
      cursor: pointer;
    }
    
    .name {
      margin-left: 30px;

      font-family: 'Lato';
      font-style: normal;
      font-weight: 400;
      font-size: 19px;
      line-height: 23px;

      color: #515151;
    }

    .status {
      padding: 0px;

      .is-following{
        font-family: "Lato";
        font-weight: 400;
        font-size: 19px;
        line-height: 23px;
        color: #c5c5c5;
      }

      .circle {
        padding: 0px;
        margin: 0px;
        margin-right: 7px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: #c5c5c5;
      }
    }

    .listed-user{
      position: relative;
      border-radius: 50px;
      height: 50px;

      margin: 0 17px 0;
      padding: 25px;

      background-color: transparent;
      transition: all .3s ease-in-out;

      &:hover{
        background-color: #afafaf;
      }
    }
  }
`;

const SearchIcon = styled(AiOutlineSearch)`
  top: 9px;
  right: 10px;
  font-size: 25px;
  position: absolute;
  color: #c6c6c6;
`;

export {
  Container,
  ContentMobile,
  UserIcon,
  Title,
  DownArrow,
  Logout,
  ContainerInputFindUser,
  InputFindUser,
  InputFindUserMobile,
  SearchIcon,
  ContainerMobile,
  ContainerInputFindUserMobile,
};
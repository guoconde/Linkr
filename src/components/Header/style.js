import styled from "styled-components";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;

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
    animation: shake 1s;
  }

  @keyframes shake {
    0% { transform: translate(1px, 1px) rotate(0deg); }
    10% { transform: translate(-1px, -2px) rotate(-1deg); }
    20% { transform: translate(-3px, 0px) rotate(1deg); }
    30% { transform: translate(3px, 2px) rotate(0deg); }
    40% { transform: translate(1px, -1px) rotate(1deg); }
    50% { transform: translate(-1px, 2px) rotate(-1deg); }
    60% { transform: translate(-3px, 1px) rotate(0deg); }
    70% { transform: translate(3px, 1px) rotate(-1deg); }
    80% { transform: translate(-1px, -1px) rotate(1deg); }
    90% { transform: translate(1px, 2px) rotate(0deg); }
    100% { transform: translate(1px, -2px) rotate(-1deg); }
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
    width: 100%;
    min-height: 45px;

    padding-top: 30px;
    padding-bottom: 15px;

    border-radius: 8px;
    border: none;

    background-color: #e7e7e7;
    font-weight: regular;
    color: red;

    position: absolute;
    top: 0;
    z-index: -1;

    div:first-child {
      margin-top: 30px;
    }

    div {
      padding: 3px 17px;

      display: flex;
      align-items: center;

      color: #515151;
      cursor: pointer;
    }

    .name {
      padding-right: 10px;
    }

    .status {
      padding: 0px;
      font-family: "Lato";
      font-weight: 400;
      font-size: 19px;
      line-height: 23px;
      color: #c5c5c5;

      .circle {
        padding: 0px;
        margin: 0px;
        margin-right: 5px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #c5c5c5;
      }
    }
  }
`;

const InputFindUserMobile = styled.div`
  width: 100%;
  height: 45px;
  position: relative;

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
    width: 100%;
    min-height: 45px;

    margin-top: -45px;
    padding-top: 30px;
    padding-bottom: 15px;

    border-radius: 8px;
    border: none;

    background-color: #e7e7e7;
    font-weight: regular;
    color: red;

    div:first-child {
      margin-top: 30px;
    }

    div {
      padding: 3px 17px;

      display: flex;
      align-items: center;

      color: #515151;
      cursor: pointer;
    }
    
    .name {
      padding-right: 10px;
    }

    .status {
      padding: 0px;
      font-family: "Lato";
      font-weight: 400;
      font-size: 19px;
      line-height: 23px;
      color: #c5c5c5;

      .circle {
        padding: 0px;
        margin: 0px;
        margin-right: 5px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #c5c5c5;
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

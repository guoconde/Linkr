import styled from "styled-components";
import { BiChevronDown } from "react-icons/bi"
import { AiOutlineSearch } from "react-icons/ai"

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;

  width: 100%;
  height: 72px;

  padding: 10px 30px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #151515;

  color: #ffffff;
  font-weight: 700;
`;

const Title = styled.h1`
  font-family: "Passion One", cursive;
  font-size: 49px;
  line-height: 54px;
  letter-spacing: 0.05em;

  cursor: pointer;
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
  transform: ${(props) => props.show && "rotate(180deg)" };

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
  opacity: ${(props) => props.show ? "1" : "0"};
  transition: all 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: #51a3a3;
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
      color: #C6C6C6;
    }
  }
  
  .list-users {
    width: 100%;
    min-height: 45px;

    padding-top: 30px;
    padding-bottom: 15px;
    
    border-radius: 8px;
    border: none;

    background-color: #E7E7E7;
    font-weight: regular;
    color: red;

    position: absolute;
    top: 0;
    z-index: -1;

    
    div:first-child{
      margin-top: 30px;
    }
    
    div {
      padding: 3px 17px;
      
      display: flex;
      align-items: center;
      
      color: #515151;
      cursor: pointer;
    }
  }

`
const SearchIcon = styled(AiOutlineSearch) `
  top: 9px;
  right: 10px;
  font-size: 25px;
  position: absolute;
  color: #C6C6C6;
`

export { Container, UserIcon, Title, DownArrow, Logout, InputFindUser, SearchIcon };

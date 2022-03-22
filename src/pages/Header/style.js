import styled from "styled-components";
import { BiChevronDown } from "react-icons/bi"

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

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

  &:hover {
    color: #1a936f;
    transform: scale(1.2);
  }
`;

const Logout = styled.div`
  width: 150px;
  height: 43px;

  position: absolute;
  right: -20px;
  top: 72px;

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

export { Container, UserIcon, Title, DownArrow, Logout };

import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  height: 44px;

  pointer-events: ${(props) => props.disabled ? "none" : "all"};

  padding: 10px;

  background-color: ${(props) => props.disabled ? "#F2F2F2" : "#FFFFFF"};
  color: ${(props) => props.disabled ? "#AFAFAF" : "#4C4C4C"};
  border: none;
  border-radius: 7px;

  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;

`;

export default Input;
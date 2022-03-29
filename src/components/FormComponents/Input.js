import styled from "styled-components";

const Input = styled.input`
  width: 80%;
  height: 65px;
  margin-bottom: 13px;
  padding: 16px;
  border: 0;
  border-radius: 6px;
  
  font-size: 27px;
  line-height: 40px;
  font-weight:bold;
  font-family: "Oswald", cursive;

  pointer-events: ${(props) => props.disabled ? "none" : "all"};
  outline: 0;
  
  background-color: ${(props) => props.disabled ? "#F2F2F2" : "#FFFFFF"};
  color: ${(props) => props.disabled ? "#AFAFAF" : "#9F9F9F"};

  &::placeholder{
    color: #9F9F9F;
  }

  @media screen and (max-width: 900px) {
    width: 90%;
    height: 55px;
    font-size: 22px;
  }
`;

export default Input;
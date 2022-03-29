import styled from "styled-components";

const Button = styled.button`
  width: 80%;
  height: 65px;
  margin-bottom: 15px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 5px;
  
  cursor: pointer;
  pointer-events: ${(props) => props.disabled ? "none" : "all"};
  opacity: ${(props) => props.disabled ? 0.7 : 1};
  
  font-weight: bold;
  font-size: 27px;
  line-height: 40px;
  font-family: "Oswald", cursive;
  
  background: #1877F2;
  color: #FFFFFF;

  @media screen and (max-width: 900px) {
    width: 90%;
    height: 55px;
    font-size: 22px;
    line-height: 33px;
  }
`;

export default Button;
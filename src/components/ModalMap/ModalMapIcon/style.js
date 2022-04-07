import styled from "styled-components";
import { MdLocationOn } from "react-icons/md";

const StyledMdLocationOn = styled(MdLocationOn)`
  color: red;
  font-size: 20px;

  transition: all 0.2s ease-in-out;

  cursor: pointer;

  &:hover{
    color: #AE3910;
    transform: scale(1.2);
  }

  &:active{
    transform: scale(0.98);
  }
`;

export default StyledMdLocationOn;
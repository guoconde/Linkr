import styled from "styled-components";
import { AiOutlineHeart } from "react-icons/ai";

const LikeOrDislike = styled.div`
  font-size: 25px;
  text-align: center;
  margin-top: 10px;
  cursor: pointer;

  .number-of-likes {
    color: white;
    font-family: Lato;
    font-size: 10px;
    font-weight: 400;
    line-height: 13px;
  }
`;

const OutlineHeart = styled(AiOutlineHeart)`
  font-size: 25px;
  color: #fff;
  transition: all 0.3s ease;
  
  &:hover {
    color: #ac0000;
  }
`;

export { LikeOrDislike, OutlineHeart };

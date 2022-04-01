import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: 700;
  color: #FFFFFF;
  transition: all 0.2s ease;

  &:hover {
    color: #dbdbdb;
  }
`;

export default StyledLink;
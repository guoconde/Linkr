import { Link } from "react-router-dom";
import styled from "styled-components";
import ReactHashtag from "@mdnm/react-hashtag";

export default function HighlightHashtag ({ children }) {
  return (
    <ReactHashtag
      renderHashtag={(hashtagValue) => (
        <StyledLink key={hashtagValue} to={`/hashtag/${hashtagValue.replace("#","")}`}>
          {hashtagValue}
        </StyledLink>
      )}
    >
      {children}
    </ReactHashtag>
  )
}

const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: 700;
  color: #FFFFFF;
`;
import { Link } from "react-router-dom";
import styled from "styled-components";
import ReactHashtag from "react-hashtag";

export default function HighlightHashtag ({ children }) {
  return (
    <ReactHashtag
      renderHashtag={(hashtagValue) => (
        <StyledLink to={`/hashtag/${hashtagValue.replace("#","")}`}>
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
import StyledLink from "./styled";
import ReactHashtag from "@mdnm/react-hashtag";

export default function HighlightHashtag({ children, index }) {
  return (
    <ReactHashtag
      renderHashtag={(hashtagValue) => (
        <StyledLink key={hashtagValue} to={`/hashtag/${hashtagValue.replace("#", "")}`}>
          {hashtagValue}
        </StyledLink>
      )}
    >
      {children}
    </ReactHashtag>
  )
}
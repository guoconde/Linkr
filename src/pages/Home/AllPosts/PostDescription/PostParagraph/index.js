import HighlightHashtag from "../../HighlightHashtags";

export default function PostParagraph({ description, index }) {
  return (
    <p>
      <HighlightHashtag index={index}>
        {description}
      </HighlightHashtag>
    </p>
  );
}
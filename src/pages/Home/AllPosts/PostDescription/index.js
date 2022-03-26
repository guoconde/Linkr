import { useEffect, useState } from "react";
import PostInput from "./PostInput";
import PostParagraph from "./PostParagraph";

export default function PostDescription({ postId, edit, setEdit, url, description, index }) {
  const [showAction, setShowAction] = useState(<PostParagraph description={description} index={index} />);
  useEffect(() => {
    if (edit === postId) {
      setShowAction(
        <PostInput
          postId={postId}
          url={url}
          setEdit={setEdit}
          description={description}
          setShowAction={setShowAction}
          index={index}
        />
      );
    }

    if (edit === null || edit !== postId) {
      setShowAction(<PostParagraph description={description} index={index} />);
    }

    // eslint-disable-next-line
  }, [edit])

  return (
    showAction
  );
}
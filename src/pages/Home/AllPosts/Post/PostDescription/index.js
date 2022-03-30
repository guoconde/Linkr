import { useEffect, useState } from "react";
import PostInput from "./PostInput";
import PostParagraph from "./PostParagraph";

export default function PostDescription({
  postId,
  edit,
  setEdit,
  url,
  description,
  index,
}) {
  const [showAction, setShowAction] = useState(false);
  useEffect(() => {
    if (edit === postId) {
      setShowAction(true);
    }

    if (edit === null || edit !== postId) {
      setShowAction(false);
    }

    // eslint-disable-next-line
  }, [edit]);

  return !showAction ? (
    <PostParagraph description={description} />
  ) : (
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

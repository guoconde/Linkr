import { useRef } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import LikeOrDislike from "./style";
import useApi from "../../../../hooks/useApi";
import ReactTooltip from "react-tooltip";
import useContexts from "../../../../hooks/useContexts";
import handleMessage from "../../../../utils/handleMessage";

export default function Likes({ postId, isLike, postLikes, likeNames }) {
  if (isLike === null) isLike = false;
  if (postLikes === null) postLikes = 0;

  const liked = useRef();
  liked.current = isLike;
  const countLikes = useRef();
  countLikes.current = parseInt(postLikes);
  const api = useApi();
  const contexts = useContexts();
  const { auth } = contexts.auth
  const { reloadPage, setReloadPage } = contexts.post

  const message = handleMessage(likeNames, auth.userName);

  async function handleLikes(postId, value) {
    const headers = { headers: { Authorization: `Bearer ${auth?.token}` } };

    if (value) {
      await api.posts.insertLike(postId, auth.userId, value, headers);
      setReloadPage(!reloadPage);
    } else {
      await api.posts.deleteLike(postId, auth.userId, value, headers);
      setReloadPage(!reloadPage);
    }    
  }

  let count;

  function handleCountLikes() {
    if (countLikes.current === 0) count = "";
    else if (countLikes.current === 1) count = "1 like";
    else if (countLikes.current > 1) count = `${countLikes.current} likes`;
  }

  handleCountLikes();

  return (
    <>
      <LikeOrDislike>
        {liked.current === false ? (
          <AiOutlineHeart
            onClick={() => handleLikes(postId, true)}
            color="white"
          />
        ) : (
          <AiFillHeart onClick={() => handleLikes(postId, false)} color="red" />
        )}
        <div data-tip={message}>
          <div className="number-of-likes">{count}</div>
        </div>
        <ReactTooltip />
      </LikeOrDislike>
    </>
  );
}

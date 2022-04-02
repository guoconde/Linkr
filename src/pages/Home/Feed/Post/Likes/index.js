import { useRef } from "react";
import { AiFillHeart } from "react-icons/ai";
import { OutlineHeart, LikeOrDislike, } from "./style";
import useApi from "../../../../../hooks/useApi";
import ReactTooltip from "react-tooltip";
import useContexts from "../../../../../hooks/useContexts";
import handleMessage from "../../../../../utils/handleMessage";

export default function Likes({ postId, isLike, postLikes, likeNames }) {
  const api = useApi();
  const contexts = useContexts();
  const { auth } = contexts.auth;
  const { reloadPage, setReloadPage } = contexts.post
  const liked = useRef();
  const countLikes = useRef();
  liked.current = isLike;
  countLikes.current = parseInt(postLikes);
  
  const message = handleMessage(likeNames, auth?.userName);

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
          <OutlineHeart className="heart-icon" onClick={() => handleLikes(postId, true)} />
        ) : (
          <AiFillHeart className="heart-icon" onClick={() => handleLikes(postId, false)} color=" #ac0000" />
        )}
        <div data-tip={message} >
          <div className="number-of-likes">{count}</div>
        </div>
        <ReactTooltip place="bottom" type="light"/>
      </LikeOrDislike>
    </>
  );
}

import { useRef } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import LikeOrDislike from "./style";
import useApi from "../../../../hooks/useApi";
import useAuth from "../../../../hooks/useAuth";
import ReactTooltip from "react-tooltip";
import usePost from "../../../../hooks/usePost";

export default function Likes({ postId, isLike, postLikes, likeNames }) {
  if (isLike === null) isLike = false;
  if (postLikes === null) postLikes = 0;

  let liked = useRef();
  liked.current = isLike;
  let countLikes = useRef();
  countLikes.current = parseInt(postLikes);
  const api = useApi();
  const { auth } = useAuth();
  const { reloadPage, setReloadPage } = usePost();

  let message = "";

  function handleMessage() {
    let arr;

    if (likeNames.length === 0) return (message = []);

    const yourName = likeNames.indexOf(auth?.userName);

    if (yourName === 0 && likeNames.length === 1)
      return (message = "You liked the message");
    if (yourName === -1 && likeNames.length === 1)
      return (message = `${likeNames[0]} liked the message`);

    arr = changePosition(likeNames, yourName, 0);

    if (yourName !== -1 && likeNames.length === 2)
      return (message = `You and ${arr[1]} liked the message`);
    if (yourName === -1 && likeNames.length === 2)
      return (message = `${likeNames[0]} and ${likeNames[1]} liked the message`);

    if (yourName !== -1 && likeNames.length === 3)
      return (message = `You, ${arr[1]} and outher people liked the message`);
    if (yourName === -1 && likeNames.length === 3)
      return (message = `${likeNames[0]}, ${likeNames[1]} and outher people liked the message`);

    if (yourName !== -1 && likeNames.length > 3)
      return (message = `You, ${arr[1]} and outhers ${
        likeNames.length - 2
      } people liked the message`);
    if (yourName === -1 && likeNames.length > 3)
      return (message = `${likeNames[0]}, ${likeNames[1]} and outhers ${
        likeNames.length - 2
      } people liked the message`);
  }

  handleMessage();

  function changePosition(arr, from, to) {
    arr.splice(to, 0, arr.splice(from, 1)[0]);
    return arr;
  }

  async function handleLikes(postId, value) {
    const headers = { headers: { Authorization: `Bearer ${auth?.token}` } };

    if (value) {
      await api.feed.insertLike(postId, auth.userId, value, headers);
      setReloadPage(!reloadPage);
    } else {
      await api.feed.deleteLike(postId, auth.userId, value, headers);
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

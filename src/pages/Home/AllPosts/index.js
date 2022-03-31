import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { TailSpin } from "react-loader-spinner";
import { fireAlert } from "../../../utils/alerts";
import useApi from "../../../hooks/useApi";
import useContexts from "../../../hooks/useContexts";
import Post from "./Post";
import useInterval from "use-interval";
import { RiRefreshLine } from 'react-icons/ri';
import { BiRepost } from "react-icons/bi";
import {
  Feed,
  Content,
  FullPost,
  RepostedBy,
  ContainerNewPosts
} from "./style";

export default function AllPosts({ setIsFollowing, setUserPhoto }) {
  const api = useApi();
  const contexts = useContexts();
  const { auth, logout } = contexts.auth;
  const { setUsernameSearched } = contexts.searchedUser;
  const { reloadPage, setReloadPage } = contexts.post;
  const [data, setData] = useState(null);
  const [newData, setNewData] = useState([]);
  const [newPosts, setNewPosts] = useState(false);
  const [numberNewPosts, setNumberNewPosts] = useState(null);
  const [edit, setEdit] = useState(null);
  const [comments, setComments] = useState(null);
  const [isFollowingSomeone, setIsFollowingSomeone] = useState(null);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {

  }, [pathname]);

  function handleReloadPage() {
    setReloadPage(true)
    setNewPosts(false)
  }

  useInterval(async () => {
    if (newData.length > data?.length) {
      const dif = newData.length - data.length
      setNumberNewPosts(dif)
      setNewPosts(true)
    }

    try {
      const headers = { headers: { Authorization: `Bearer ${auth?.token}` } };
      let promisse;

      if (pathname.includes("timeline")) {
        promisse = await api.feed.listAll(headers);
      } else if (pathname.includes("hashtag")) {
        promisse = await api.feed.listByHashtag(pathname.split("/")[2], headers);
      } else if (pathname.includes("user")) {
        promisse = await api.feed.listByUser(pathname.split("/")[2], headers);
        if (!promisse.data) {
          fireAlert("User doesn't exists");
          navigate("/timeline");
        }

        setNewData(promisse.data.posts);
        setUsernameSearched(promisse.data.name);
        return;
      }

      setNewData(promisse.data);
    } catch (error) {
      if (error.response?.status === 401 || error.response?.status === 404) {
        await fireAlert(error.response.data);
        logout();
        return navigate("/");
      }
      return fireAlert(
        "An error occured while trying to fetch the posts, Plese refresh the page!"
      );
    }
  }, 15000);

  async function handleGetAllPosts() {
    try {
      const headers = { headers: { Authorization: `Bearer ${auth?.token}` } };
      let promisse;

      if (pathname.includes("timeline")) {
        promisse = await api.feed.listAll(headers);
      } else if (pathname.includes("hashtag")) {
        promisse = await api.feed.listByHashtag(
          pathname.split("/")[2],
          headers
        );
      } else if (pathname.includes("user")) {
        promisse = await api.feed.listByUser(pathname.split("/")[2], headers);
        if (!promisse.data) {
          fireAlert("User doesn't exists");
          navigate("/timeline");
        }

        setData(promisse.data.posts);
        setUsernameSearched(promisse.data.name);
        setIsFollowing(promisse.data.isFollowing);
        setUserPhoto(promisse.data.photo);
        return;
      }

      setData(promisse.data.posts);
      setIsFollowingSomeone(promisse.data.isFollowingSomeone);
    } catch (error) {
      if (error.response?.status === 401 || error.response?.status === 404) {
        await fireAlert(error.response.data);
        logout();
        return navigate("/");
      }
      return fireAlert(
        "An error occured while trying to fetch the posts, Plese refresh the page!"
      );
    }
  }

  useEffect(() => {
    handleGetAllPosts();

    // eslint-disable-next-line
  }, [pathname, reloadPage]);

  console.log(data);

  if (!data)
    return (
      <Content>
        <TailSpin color="white" ariaLabel="loading-indicator" />
        <div>Loading...</div>
      </Content>
    );

  if (data.length === 0)
    return (
      <Content>
        <div>
          {isFollowingSomeone
            ? "No posts found from your friends"
            : "You don't follow anyone yet. Search for new friends!"}
        </div>
      </Content>
    );

  function handleEdit(postIndex) {
    if (edit !== null && edit === postIndex) {
      setEdit(null);
    } else {
      setEdit(postIndex);
    }
  }

  function handleComments(postIndex) {
    if (comments !== null && comments === postIndex) {
      setComments(null);
    } else {
      setComments(postIndex);
    }
  }

  return (
    <Feed>
      {newPosts &&
        <ContainerNewPosts onClick={handleReloadPage}>
          <div>{numberNewPosts} new posts, load more! </div>
          <RiRefreshLine />
        </ContainerNewPosts>
      }

      {data.map((el, i) => {
        return (
          <FullPost key={i}>
            {el.sharerName &&
              <RepostedBy>
                <BiRepost
                  size={27}
                  color="white"
                />
                Re-posted by <span>{el.sharerId === auth?.userId ? "you" : el.sharerName}</span>
              </RepostedBy>
            }

            <Post
              key={i}
              postIndex={i}
              {...el}
              edit={edit}
              setEdit={setEdit}
              comments={comments}
              setComments={setComments}
              handleEdit={handleEdit}
              handleComments={handleComments}
              handleGetAllPosts={handleGetAllPosts}
            />
          </FullPost>
        )
      })}
    </Feed>
  );
}

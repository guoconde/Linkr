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
import InfiniteScrooll from "react-infinite-scroller";
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
  const [newPosts, setNewPosts] = useState(false)
  const [numberNewPosts, setNumberNewPosts] = useState(null)
  const [offset, setOffset] = useState(10)
  const [hasMore, setHasmore] = useState(false)
  const [edit, setEdit] = useState(null);
  const [comments, setComments] = useState(null);
  const [isFollowingSomeone, setIsFollowingSomeone] = useState(null);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  useEffect(() => {
    setNewData([]);
    setOffset(10);
    handleGetAllPosts();

    // eslint-disable-next-line
  }, [pathname, reloadPage]);


  useInterval(async () => {
    try {
      const headers = { headers: { Authorization: `Bearer ${auth?.token}` } };
      let promisse;

      promisse = await api.feed.listAll(headers, offset);

      if (pathname.includes("timeline") && newData.length > data.length && newData[0].id !== data[0].id) {
        const dif = newData.length - data.length
        setNumberNewPosts(dif)
        setNewPosts(true)
      }

      setNewData(promisse.data.posts);

      if (data.length === newData.length) {
        return setHasmore(false);
      }
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
        promisse = await api.feed.listAll(headers, offset);
      } else if (pathname.includes("hashtag")) {
        promisse = await api.feed.listByHashtag(
          pathname.split("/")[2],
          headers, offset
        );
      } else if (pathname.includes("user")) {
        promisse = await api.feed.listByUser(pathname.split("/")[2], headers, offset);
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

  function handleReloadPage() {
    setReloadPage(true);
    setNewPosts(false);
  }

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

  if (!data) {
    return (
      <Content>
        <TailSpin color="white" ariaLabel="loading-indicator" />
        <div>Loading...</div>
      </Content>
    );
  } else if (data.length === offset) {
    setHasmore(true);
    setOffset(offset + 10);
  }

  if (data.length === 0) {
    return (
      <Content>
        <div>
          {isFollowingSomeone
            ? "No posts found from your friends"
            : "You don't follow anyone yet. Search for new friends!"}
        </div>
      </Content>
    );
  }

  return (
    <InfiniteScrooll
      pageStart={0}
      loadMore={handleGetAllPosts}
      hasMore={hasMore}
      loader={
        <Content>
          <TailSpin color="white" ariaLabel="loading-indicator" />
          <div>Loading...</div>
        </Content>
      }
    >
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
    </InfiniteScrooll>
  );
}

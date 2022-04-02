import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { TailSpin } from "react-loader-spinner";
import { fireAlert } from "../../../utils/alerts";
import useApi from "../../../hooks/useApi";
import useContexts from "../../../hooks/useContexts";
import Post from "./Post";
import useInterval from "use-interval";
import { RiRefreshLine } from "react-icons/ri";
import { BiRepost } from "react-icons/bi";
import InfiniteScrooll from "react-infinite-scroller";
import {
  TimeLine,
  Content,
  FullPost,
  RepostedBy,
  ContainerNewPosts,
  ContentLoaderInfinitScroll
} from "./style";

export default function Feed({ setIsFollowing, setUserPhoto }) {
  const api = useApi();
  const contexts = useContexts();
  const { auth, logout } = contexts.auth;
  const { setUsernameSearched } = contexts.searchedUser;
  const { reloadPage, setReloadPage } = contexts.post;
  const [data, setData] = useState(null);
  const [newData, setNewData] = useState();
  const [newPosts, setNewPosts] = useState(false);
  const [numberNewPosts, setNumberNewPosts] = useState(null);
  const [limit, setLimit] = useState(10);
  const [hasMore, setHasmore] = useState(false);
  const [edit, setEdit] = useState(null);
  const [comments, setComments] = useState(null);
  const [countPromisse, setCountPromisse] = useState()
  const [isFollowingSomeone, setIsFollowingSomeone] = useState(null);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setComments(null);

    window.scroll(0, 0);
  }, [pathname]);

  useEffect(() => {
    handleFeed();

    // eslint-disable-next-line
  }, [pathname, reloadPage]);

  useInterval(async () => {
    try {
      const headers = { headers: { Authorization: `Bearer ${auth?.token}` } };
      let promisse;

      promisse = await api.feed.listAll(headers, limit);

      setCountPromisse(promisse.data.getCountPosts);

      if (newData && newData < promisse.data.getCountPosts) {
        const dif = promisse.data.getCountPosts - newData;
        setNumberNewPosts(dif);
        setNewPosts(true);
      }

      if (data.length === promisse.data.posts.length) {
        return setHasmore(false);
      }
    } catch (error) {
      if (error.response?.status === 401 || error.response?.status === 404) {
        await fireAlert(error.response.data);
        logout();
        return navigate("/");
      }

      return fireAlert(
        "An error occured while trying to fetch the posts. Plese refresh the page!"
      );
    }
  }, 5000);

  async function handleFeed() {
    try {
      const headers = { headers: { Authorization: `Bearer ${auth?.token}` } };
      let promisse;

      if (pathname.includes("timeline")) {
        promisse = await api.feed.listAll(headers, limit);
      } else if (pathname.includes("hashtag")) {
        promisse = await api.feed.listByHashtag(
          pathname.split("/")[2],
          headers,
          limit
        );
      } else if (pathname.includes("user")) {
        promisse = await api.feed.listByUser(
          pathname.split("/")[2],
          headers,
          limit
        );

        if (!promisse.data) {
          fireAlert("User doesn't exists");
          navigate("/timeline");
        }

        if (data?.length === promisse.data.posts.length) {
          setHasmore(false);
        }

        setData(promisse.data.posts);
        setUsernameSearched(promisse.data.name);
        setIsFollowing(promisse.data.isFollowing);
        setUserPhoto(promisse.data.photo);
        return;
      }

      if (data?.length === promisse.data.posts.length) {
        setHasmore(false);
      }

      setNewData(promisse.data.getCountPosts);
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
    setNewData(countPromisse);
    setReloadPage(true);
    setNewPosts(false);

    window.location.reload();
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
  } else if (data.length === limit) {
    setLimit(limit + 10);
    setHasmore(true);
  }

  if (data.length === 0) {
    return (
      <Content>
        <div className="message">
          {pathname.includes("timeline")
            ? isFollowingSomeone
              ? "No posts found from your friends"
              : "You don't follow anyone yet. Search for new friends!"
            : "This user has no posts"}
        </div>
      </Content>
    );
  }

  return (
    <InfiniteScrooll
      pageStart={0}
      loadMore={handleFeed}
      hasMore={hasMore}
      loader={
        <ContentLoaderInfinitScroll key={0}>
          <TailSpin color="#6D6D6D" ariaLabel="loading-indicator" heigth="40" width="40" />
          <div className="loader-infinit-scroll-message">Loading more posts...</div>
        </ContentLoaderInfinitScroll>
      }
    >
      <TimeLine>
        {newPosts && (
          <ContainerNewPosts onClick={handleReloadPage}>
            <div>{numberNewPosts} new posts, load more! </div>
            <RiRefreshLine />
          </ContainerNewPosts>
        )}

        {data.map((el, i) => {
          return (
            <FullPost key={i}>
              {el.sharerName && (
                <RepostedBy>
                  <BiRepost size={27} color="white" />
                  Re-posted by{" "}
                  <span>
                    {el.sharerId === auth?.userId ? "you" : el.sharerName}
                  </span>
                </RepostedBy>
              )}

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
                handleFeed={handleFeed}
              />
            </FullPost>
          );
        })}
      </TimeLine>
    </InfiniteScrooll>
  );
}

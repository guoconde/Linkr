import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { TailSpin } from "react-loader-spinner";
import { fireAlert } from "../../../utils/alerts";
import useApi from "../../../hooks/useApi";
import useContexts from "../../../hooks/useContexts";
import Post from "./Post";
import { Content, Feed } from "./style";

export default function AllPosts() {
  const api = useApi();
  const contexts = useContexts();
  const { auth, logout } = contexts.auth;
  const { setUsernameSearched } = contexts.searchedUser;
  const { reloadPage } = contexts.post;
  const [data, setData] = useState(null);
  const [edit, setEdit] = useState(null);
  const [comments, setComments] = useState(null);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  async function handleGetAllPosts() {
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

        setData(promisse.data.posts);
        setUsernameSearched(promisse.data.name);
        return;
      }

      setData(promisse.data);
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
        <div>There are no posts yet!</div>
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
      {data.map((el, i) => {
        return (
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
        )
      })}
    </Feed>
  );
}

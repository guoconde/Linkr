import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react"
import { MenuContext } from "../contexts/MenuContext";
import { PostContext } from "../contexts/PostsContext";
import { SearchedUserContext } from "../contexts/SearchedUserContext";

export default function useContexts() {
  return {
    auth: useContext(AuthContext),
    menu: useContext(MenuContext),
    post: useContext(PostContext),
    searchedUser: useContext(SearchedUserContext)
  };
} 
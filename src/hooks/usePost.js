import { useContext } from "react";
import { PostContext } from "../contexts/PostsContext";

export default function usePost() {
  return useContext(PostContext);
}

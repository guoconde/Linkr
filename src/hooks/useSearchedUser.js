import { useContext } from "react";
import { SearchedUserContext } from "../contexts/SearchedUserContext";

export default function useSearchedUser() {
  return useContext(SearchedUserContext);
}
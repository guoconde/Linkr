import { createContext } from "react";
import { useState } from "react";

export const PostContext = createContext();

export default function PostProvider({ children }) {
  const [reloadPage, setReloadPage] = useState(false);

  return (
    <PostContext.Provider value={{ reloadPage, setReloadPage}}>
      {children}
    </PostContext.Provider>
  )
}
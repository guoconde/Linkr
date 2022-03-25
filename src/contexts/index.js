import { AuthProvider } from "./AuthContext";
import { MenuProvider } from "./MenuContext";
import PostProvider from "./PostsContext";
import { SearchedUserProvider } from "./SearchedUserContext";


export default function GlobalContext({ children }){
  return (
    <AuthProvider>
      <MenuProvider>
        <SearchedUserProvider>
          <PostProvider>
            {children}
          </PostProvider>
        </SearchedUserProvider>
      </MenuProvider>
    </AuthProvider>
  )
}
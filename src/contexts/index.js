import AuthProvider from "./AuthContext";
import MenuProvider from "./MenuContext";
import PostProvider from "./PostsContext";
import SearchedUserProvider from "./SearchedUserContext";


export default function GlobalContext({ children }){
  return (
    <AuthProvider>
      <MenuProvider>
        <PostProvider>
          <SearchedUserProvider>
            {children}
          </SearchedUserProvider>
        </PostProvider>
      </MenuProvider>
    </AuthProvider>
  )
}
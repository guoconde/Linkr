import AuthProvider from "./AuthContext";
import GeolocationProvider from "./GeolocationContext";
import MenuProvider from "./MenuContext";
import PostProvider from "./PostsContext";
import SearchedUserProvider from "./SearchedUserContext";

export default function GlobalContext({ children }) {
  return (
    <AuthProvider>
      <MenuProvider>
        <PostProvider>
          <SearchedUserProvider>
            <GeolocationProvider>
              {children}
            </GeolocationProvider>
          </SearchedUserProvider>
        </PostProvider>
      </MenuProvider>
    </AuthProvider>
  )
}
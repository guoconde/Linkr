import AuthProvider from "./AuthContext";
import MenuProvider from "./MenuContext";
import SearchedUserProvider from "./SearchedUserContext";

export default function GlobalContext({children}){
    return (
        <AuthProvider>
            <MenuProvider>
                <SearchedUserProvider>
                    {children}
                </SearchedUserProvider>
            </MenuProvider>
        </AuthProvider>
    )
}
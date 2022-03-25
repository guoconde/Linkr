import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [auth, setAuth] = useLocalStorage('auth', null);

  function login(authData) {
    setAuth(authData);
  }

  function logout() {
    setAuth(null);
  }

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
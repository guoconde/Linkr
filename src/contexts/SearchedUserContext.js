import { createContext, useState } from "react";

export const SearchedUserContext = createContext();

export default function SearchedUserProvider({ children }) {
  const [usernameSearched, setUsernameSearched] = useState('');

  return (
    <SearchedUserContext.Provider value={{ usernameSearched, setUsernameSearched}}>
      {children}
    </SearchedUserContext.Provider>
  )
}
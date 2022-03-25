import { createContext, useState } from "react";

export const MenuContext = createContext();

export default function MenuProvider({ children }) {
  const [toggleLogout, setToggleLogout] = useState(false);

  function handleToggleLogout() {
    setToggleLogout(!toggleLogout);
  }

  function handleHideLogout() {
    setToggleLogout(false);
  }

  return (
    <MenuContext.Provider value={{ toggleLogout, handleToggleLogout, handleHideLogout }}>
      {children}
    </MenuContext.Provider>
  )
}
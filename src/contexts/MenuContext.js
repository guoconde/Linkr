import { createContext, useState } from "react";

export const MenuContext = createContext();

export default function MenuProvider({ children }) {
  const [toggleLogout, setToggleLogout] = useState(false);
  const [users, setUsers] = useState(null);
  const [value, setValue] = useState("");
  const [valueMobile, setValueMobile] = useState("");

  function handleToggleLogout() {
    setToggleLogout(!toggleLogout);
  }

  function handleHideLogout() {
    setToggleLogout(false);
  }

  function handleHideSearchBar() {
    setValue("");
    setValueMobile("");
    setUsers(null);
  }

  function handleHideMenuItems() {
    handleHideLogout();
    handleHideSearchBar();
  }

  return (
    <MenuContext.Provider value={{
      toggleLogout,
      handleToggleLogout,
      handleHideLogout,
      users,
      setUsers,
      value,
      setValue,
      valueMobile,
      setValueMobile,
      handleHideSearchBar,
      handleHideMenuItems
    }}>
      {children}
    </MenuContext.Provider>
  )
}
import { createContext, useState } from "react";

const MenuContext = createContext();

export function MenuProvider({ children }) {
  const [toggleLogout, setToggleLogout] = useState(false);

  function handleToggleLogout() {
    console.log("entrei 1");
    setToggleLogout(!toggleLogout);
  }

  function handleHideLogout() {
    console.log("entrei 2");
    setToggleLogout(false);
  }

  console.log(toggleLogout);

  return (
    <MenuContext.Provider value={{ toggleLogout, handleToggleLogout, handleHideLogout }}>
      {children}
    </MenuContext.Provider>
  )
}

export default MenuContext;
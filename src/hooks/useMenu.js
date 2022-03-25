import { useContext } from "react";
import { MenuContext } from "../contexts/MenuContext";

export default function useMenu() {
  return useContext(MenuContext);
}
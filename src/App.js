import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { MenuProvider } from "./contexts/MenuContext";
import { SearchedUserProvider } from "./contexts/SearchedUserContext";

import Header from "./pages/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Temporary from "./temporary";

export default function App() {
  return (
    <AuthProvider>
      <MenuProvider>
        <SearchedUserProvider>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/timeline" element={<Home />} />
              <Route path="/" element={<Login />} />
              <Route path="/sign-up" element={<Register />} />
              <Route path="/hashtag/:hashtag" element={<Home/>} />
              <Route path="/user/:id" element={<Home/>} />
              <Route path="/teste" element={<Temporary />} />
            </Routes>
          </BrowserRouter>
        </SearchedUserProvider>
      </MenuProvider>
    </AuthProvider>
  );
}
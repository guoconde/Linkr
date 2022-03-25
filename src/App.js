import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalContext from "./contexts";

import Header from "./pages/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  return (
    <GlobalContext>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/timeline" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<Register />} />
          <Route path="/hashtag/:hashtag" element={<Home />} />
          <Route path="/user/:id" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </GlobalContext>
  );
}

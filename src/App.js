import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Home from "./pages/home";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/timeline" element={<Home/>}/>
        <Route path="/" element={<Login/>}/>
        <Route path="/sign-up" element={<Register />}/>
      </Routes>
    </BrowserRouter>
  );
}
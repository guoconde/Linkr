import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Home from "./pages/home";
import Login from "./pages/Login";

export default function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}
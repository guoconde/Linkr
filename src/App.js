import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Home from "./pages/home";

export default function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sign-up" element={<Home/>}/>
        <Route path="/timeline" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}
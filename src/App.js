import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { AuthProvider } from "./contexts/AuthContext";

export default function App() {
  return (
<<<<<<< HEAD
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/timeline" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
=======
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sign-up" element={<Home/>}/>
        <Route path="/timeline" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
>>>>>>> d3bed3a31a124b7fe1df8e5d69e32242b49ad2c1
  );
}
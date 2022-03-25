import { Route, Routes } from "react-router";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";

export default function Pages() {
    return(
        <Routes>
            <Route path="/sign-up" element={<Register />} />
            <Route path="/" element={<Login />} />
            <Route path="/timeline" element={<Home />} />
            <Route path="/hashtag/:hashtag" element={<Home/>} />
            <Route path="/user/:id" element={<Home/>} />
        </Routes>
    )
}
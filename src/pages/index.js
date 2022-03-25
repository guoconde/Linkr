import { Route, Routes } from "react-router";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Temporary from "../temporary";

export default function Pages() {
    return(
        <Routes>
            <Route path="/timeline" element={<Home />} />
            <Route path="/" element={<Login />} />
            <Route path="/sign-up" element={<Register />} />
            <Route path="/hashtag/:hashtag" element={<Home/>} />
            <Route path="/user/:id" element={<Home/>} />
            <Route path="/teste" element={<Temporary />} />
        </Routes>
    )
}
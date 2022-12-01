import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Random from "./components/Random/Random";
import Showcase from "./components/Showcase/Showcase";
import TweetNavbar from "./components/Navbar/Navbar";
import Error from "./components/404/Error";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";

function App() {
    return (
        <div>
            <TweetNavbar />
            <Routes>
                <Route path="/" element={<About />} />
                <Route path="Random" element={<Random />} />
                <Route path="Showcase" element={<Showcase />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </div>
    );
}

export default App;

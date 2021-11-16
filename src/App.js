import React from "react";
import {HashRouter, Route, Routes} from "react-router-dom";
import Home from "./Routes/Home";
import About from "./Routes/About";
import Navigation from "./Components/Navigation";
import Detail from "./Routes/Detail"
import "./App.css"

function App() {
    return (
        <HashRouter>
            <Navigation />
            <Routes>
                <Route path="/" exact={true} element={<Home/>} />
                <Route path="/about" element={<About/>}/>
                <Route path="/movie-detail" element={<Detail/>} />
            </Routes>
        </HashRouter>
    );
}

export default App;
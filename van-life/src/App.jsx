import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Home from "./components/Home/Home";

export default function App(){
  return(
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/About' element={<About />} />
      </Routes>
  )
}
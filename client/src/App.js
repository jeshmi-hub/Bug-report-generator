import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import BugForm from "./components/BugForm";
import Home from "./components/Home";


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/bugForm" element={<BugForm/>}/>
      
    </Routes>
    </BrowserRouter>
    </>

  );
}

export default App;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import BugForm from "./components/BugForm";


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/bugReport" element={<BugForm/>}/>
    </Routes>
    </BrowserRouter>
    </>

  );
}

export default App;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import BugForm from "./components/BugForm";
import Home from "./components/Home";
import BugRecord from "./components/BugRecord";
import BugRecords from "./components/BugRecords";
import AllBugs from "./components/AllBugs";
import UpdateBug from "./components/UpdateBug";


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/bugForm" element={<BugForm/>}/>
      <Route path="/bugRecord/:id" element={<BugRecord/>}/>
      <Route path="/bugRecords" element={<BugRecords/>}/>
      <Route path="/allBugs" element={<AllBugs/>}/>
      <Route path="/updateBug/:id" element={<UpdateBug/>}/>
    </Routes>
    </BrowserRouter>
    </>

  );
}

export default App;

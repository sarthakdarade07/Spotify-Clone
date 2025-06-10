import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";

function App() {
 
  return (
    <>
      <Routes>
        <Route path="/" Component={Home}></Route>
      </Routes>
    </>
  );

 
}
export default App;

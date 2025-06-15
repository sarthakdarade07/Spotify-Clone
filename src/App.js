import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Components/Home";
import RecommondedSongs from "./Components/RecommondedSongs";
import { useEffect, useState } from "react";
import Songs from "./Components/Songs";


function App(props) {




  return (
    <>
    <Home></Home>     
    </>
  );
}
export default App;

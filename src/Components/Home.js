import { useEffect, useState } from "react";
import ApiCalls from "./ApiCalls";
import HomeDisplay from "./HomeDisplay";
import NavBar from "./NavBar";
import RecommondedSongs from "./RecommondedSongs";

function Home(props) {

  useEffect(()=>{
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white"; // optional
  },[props])

  return (
    <>
      {/* Api calls will fech all APIs */}
      <ApiCalls></ApiCalls>
      
      <HomeDisplay></HomeDisplay>
   

    </>
  );
}

export default Home;

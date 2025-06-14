import { useContext, useEffect, useState } from "react";
import ApiCalls from "./ApiCalls";
import NavBar from "./NavBar";
import RecommondedSongs from "./RecommondedSongs";
import HomeContent from "./HomeContent";
import Tracks from "./Tracks";

function Home(props) {



  useEffect(()=>{
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white"; // optional
  },[props])

  return (
    <>
      {/* Api calls will fech all APIs */}
      <ApiCalls></ApiCalls>

     
        <NavBar></NavBar>
        <HomeContent> </HomeContent>
 
    </>
  );
}

export default Home;
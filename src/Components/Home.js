import { useContext, useEffect, useState } from "react";
import ApiCalls from "./ApiCalls";
import NavBar from "./NavBar";
import RecommondedSongs from "./RecommondedSongs";
import HomeContent from "./HomeContent";
import Tracks from "./Tracks";
import FooterMusicContoller from "./FooterMusicController";

function Home(props) {
 let [playingSong,setPlayingSong]=useState();


  useEffect(()=>{
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white"; // optional
  },[props,playingSong])

  return (
    <>
      {/* Api calls will fech all APIs */}
      <ApiCalls></ApiCalls>

     
        <NavBar></NavBar>
        <HomeContent getPlayingSong={(obj)=>{{setPlayingSong(obj)}}}> </HomeContent>
       {playingSong && <FooterMusicContoller playingSong={playingSong}/> }
    </>
  );
}

export default Home;
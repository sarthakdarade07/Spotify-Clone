import { useContext, useEffect, useState } from "react";
import ApiCalls from "./ApiCalls";
import NavBar from "./NavBar";
import RecommondedSongs from "./RecommondedSongs";
import HomeContent from "./HomeContent";
import TrackContext from "./TrackContext";
import Tracks from "./Tracks";

function Home(props) {
  let [trackName, setTrackName] = useState("hi");


  useEffect(()=>{
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white"; // optional
  },[props])

  return (
    <>
      {/* Api calls will fech all APIs */}
      {/* <ApiCalls></ApiCalls> */}

      <TrackContext.Provider value={{ trackName, setTrackName }}>
        <NavBar></NavBar>
        <HomeContent> </HomeContent>
      </TrackContext.Provider>
    </>
  );
}

export default Home;

import { useEffect, useState } from "react";
import ApiCalls from "./ApiCalls";
import NavBar from "./NavBar";
import HomeContent from "./HomeContent";
import FooterMusicContoller from "./FooterMusicController";
import Alerts from "./Alerts";

function Home(props) {
  let [playingSong, setPlayingSong] = useState();
  //popUpObj from Tracks to HomeContent to Home
  const [popUpObj, setPopUpObj] = useState();
  const [popUpFlag,setPopUpFlag]=useState();

  function funSetPopUp(obj){
    setPopUpObj(obj);
    setPopUpFlag(true);
  }
  useEffect(() => {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white"; // optional
    setPopUpFlag(false);
  }, [props, playingSong]);



  return (
    <>
      {/* Api calls will fech all APIs */}
      <ApiCalls></ApiCalls>

      <NavBar></NavBar>
      <HomeContent
        getPlayingSong={(obj) => {
          {
            setPlayingSong(obj);
          }
        }}
        getPopUpObj={funSetPopUp}>
      </HomeContent>
      {playingSong && <FooterMusicContoller playingSong={playingSong} />}

      {popUpFlag && <Alerts popUpObj={popUpObj} />}
    </>
  );
}

export default Home;

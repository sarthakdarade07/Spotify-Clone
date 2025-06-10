import { useEffect, useState } from "react";
import ApiCalls from "./ApiCalls";
import HomeDisplay from "./HomeDisplay";

function Home() {


  useEffect(()=>{
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white"; // optional
  },[])

  return (
    <>
    {/* Api calls will fech all APIs */}
    <ApiCalls></ApiCalls>
     <HomeDisplay></HomeDisplay>
    </>
  );
}

export default Home;

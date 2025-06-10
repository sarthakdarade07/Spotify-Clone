import { useEffect, useState } from "react";
import DisplayHomeSongs from "./DisplayHomeSongs";
import ApiCalls from "./ApiCalls";

function Home() {


  useEffect(()=>{
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white"; // optional
  },[])

  return (
    <>
    {/* Api calls will fech all APIs */}
    <ApiCalls></ApiCalls>
      <DisplayHomeSongs></DisplayHomeSongs>
    </>
  );
}

export default Home;

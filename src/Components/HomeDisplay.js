import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import HomeContent from "./HomeContent";
import ApiCalls from "./ApiCalls";

function HomeDisplay(props) {


  let [exPremimumFlag, setExPremimumFlag] = useState(false);

  function getExPremimumFlag(param) {
    setExPremimumFlag(param);
    console.log(param)
  }

  useEffect(() => {
  
  }, [props]);

  return (
    <>
    {
      <NavBar sendExPremimumFlag={getExPremimumFlag}></NavBar> }
      <HomeContent exPremimumFlag={exPremimumFlag}></HomeContent>
    </>
  );
}

export default HomeDisplay;

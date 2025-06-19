import { useEffect, useState } from "react";
import styles from "./FavouriteList.module.css";
import Tracks from "./Tracks";


export default function FavouriteList(props) {


function funPlaySong(obj){
    props.getSong(obj);
}
  return (
    <>
      <Tracks favListFlag={true} getSong={funPlaySong}></Tracks>
    </>
  );
}

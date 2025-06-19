import { useEffect, useState } from "react";
import styles from "./CurrPlayingSong.module.css";

function CurrPlayingSong(props) {
  //manage state of curr song playing;
  const [currSong, setCurrSong] = useState([]);

  //list of available song and their path
  const songList = [
    {
      songId: "5sD68azrLfnPLvUHCill7b",
      songPath: "Audio/Tum_Hi_Aana.mp3",
      songImg: "Images/Tum_Hi_Aana.jpg",
    },
    {
      songId: "2P5Ctdtg3Wrt6s5xw0jP7K",
      songPath: "Audio/Dekte_Dekhte.mp3",
      songImg: "Images/Dekhte_Dekhte.jpg",
    },

    {
      songId: "2NZie17D5Xg9shzVHkR5PO",
      songPath: "Audio/Mera_Bina.mp3",
      songImg: "Images/Mera_Bina.jpg",
    },
  ];

  //function to match path and image with selected song
  function setSong(tempSong) {
    try {
      const tempArr = songList.filter((x) => x.songId === tempSong[0].id);
     //fiter selected song from given songlist
     
        
      if (tempArr.length > 0) {
        tempArr.push(props.song);
        setCurrSong(tempArr);
        props.getCurrSong(tempArr);
      } else{
        alert("Song is not available");
      }
    } catch (e) {
      console.log("error", e);
    }
  }
  



  useEffect(() => {
    if (props.song) {
      setSong(props.song);
    }
  }, [props.song]);

  return (
    <>
      {currSong.length > 0 && currSong[0] && (
        <div key={currSong[0].songId} className={styles.musicDiv}>
          <img
            src={currSong[0].songImg}
            alt="Current Song"
            className={styles.musicImg}
          />

          <marquee>
            <h5>{currSong[1][0].name}</h5>
          </marquee>
          <ul type="none">
            <li>Artists</li>
            <hr />
            {currSong[1][0].artists.map((x, ind) => {
              return <li key={ind}>{x.name}</li>;
            })}
          </ul>
        </div>
      )}
    </>
  );
}

export default CurrPlayingSong;

import { useEffect, useState } from "react";
import styles from "./CurrPlayingSong.module.css";

function CurrPlayingSong(props) {
  const [currSong, setCurrSong] = useState([]);

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

  function setSong(tempSong) {
    try {
      const tempArr = songList.filter((x) => x.songId === tempSong[0].id);
      if (tempArr.length > 0) {
        setCurrSong(tempArr);
        props.getCurrSong(tempArr);
      } else {
        setCurrSong([]);
      }
    } catch (e) {
      console.log("error", e);
    }
  }

  useEffect(() => {
    if (props.song) {
      setSong(props.song);
      console.log(props.song[0].artists[0].name);
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
          {/* <audio controls >
            <source src={currSong[0].songPath} />
            Your browser does not support the audio element.
          </audio> */}
          <marquee>
            <h5>{props.song[0].name}</h5>
          </marquee>
          <ul type="none">
            <li>Artists</li>
            <hr/>
            {
            props.song[0].artists.map((x) => {
              return <li>{x.name}</li>; 
            })}
          </ul>
        </div>
      )}
    </>
  );
}

export default CurrPlayingSong;

import { useEffect, useState } from "react";

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
  ];

  function setSong(tempSongId) {
    try {
      const tempArr = songList.filter((x) => x.songId === tempSongId);
      if (tempArr.length > 0) {
        setCurrSong(tempArr);
        console.log("Setting song to:", tempArr); // Log the actual new value
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
    }
  }, [props.song]);

  return (
    <>
      {currSong.length > 0 && currSong[0] && (
        <div key={currSong[0].songId}>
          <img src={currSong[0].songImg} alt="Current Song"/>
          <audio controls>
            <source src={currSong[0].songPath} />
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
    </>
  );
}

export default CurrPlayingSong;

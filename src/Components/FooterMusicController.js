import styles from "./FooterMusicController.module.css";
import { useState, useRef, useEffect, use } from "react";

export default function FooterMusicContoller({ playingSong }) {
  //states
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [repeat,setRepeat] =useState(false);
  let [repeatBtnStyle ,setRepeatStyle]=useState();

   //refrences
  const audioPlayer = useRef();
  const progressBar = useRef();
  const animationRef = useRef();
  
  function  repeatToggle(){
    let val=repeat;
    setRepeat(!val);
     var temp = {};
    if(val==false){
      temp = {
        color: "grey",
      };
    }
    else{
      temp = {
        color: "rgb(61, 61, 61)",
      };
    }
      setRepeatStyle(temp);
      audioPlayer.current.loop=!audioPlayer.current.loop;
  }

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);

    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const whilePlaying = () => {
    setCurrentTime(audioPlayer.current.currentTime);
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const handleRangeChange = () => {
    const value = Number(progressBar.current.value);
    audioPlayer.current.currentTime = value;
    setCurrentTime(value);
  };

  const formatTime = (sec) => {
    const minutes = Math.floor(sec / 60);
    const seconds = Math.floor(sec % 60);
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  };

  // Handle song changes
  useEffect(() => {
    if (playingSong && playingSong[0]) {
      const audio = audioPlayer.current;

      // Stop and load new audio
      audio.pause();
      audio.load();
      setCurrentTime(0);

      const onLoadedMetadata = () => {
        const seconds = Math.floor(audio.duration);
        setDuration(seconds);
        progressBar.current.max = seconds;

        // Try to autoplay safely after loading
        audio
          .play()
          .then(() => {
            setIsPlaying(true);
            animationRef.current = requestAnimationFrame(whilePlaying);
          })
          .catch((err) => {
            console.error("Autoplay error:", err);
            setIsPlaying(false);
          });
      };

      audio.addEventListener("loadedmetadata", onLoadedMetadata);

      return () => {
        audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      };
    }
  }, [playingSong]);

  

  // to update CSS range width
  useEffect(() => {
    if (progressBar.current && duration > 0) {
      const percent = (currentTime / duration) * 100;
      progressBar.current.style.setProperty(
        "--seek-before-width",
        `${percent}%`
      );
    }
    if(audioPlayer.current.ended){
      setIsPlaying(false);
    }
  }, [currentTime, duration]);

  return (
    <>
      <audio ref={audioPlayer} preload="metadata">
        {playingSong && playingSong[0] && (
          <source src={playingSong[0].songPath} />
        )}
      </audio>

      <div className={styles.musicControllerDiv}>
        <button className={styles.shuffleBtn}>
          <i className="fa-solid fa-shuffle"></i>
        </button>

        <button className={styles.backwardBtn}>
          <i className="fa-solid fa-backward-step"></i>
        </button>

        <button onClick={togglePlayPause} className={styles.playPauseBtn}>
          {isPlaying ? (
            <i className="bi bi-pause-circle-fill"></i>
          ) : (
            <i className="bi bi-play-circle-fill"></i>
          )}
        </button>

        <button className={styles.forwardBtn}>
          <i className="fa-solid fa-forward-step"></i>
        </button>

        <button className={styles.repeatBtn} onClick={repeatToggle} style={repeatBtnStyle}>
          <i className="fa-solid fa-repeat"></i>
        </button>

        <div className={styles.currentTime}>{formatTime(currentTime)}</div>

        <input
          type="range"
          className={styles.progressBar}
          value={currentTime}
          ref={progressBar}
          onChange={handleRangeChange}
        />

        <div className={styles.duration}>
          {duration && !isNaN(duration) && formatTime(duration)}
        </div>
      </div>
    </>
  );
}

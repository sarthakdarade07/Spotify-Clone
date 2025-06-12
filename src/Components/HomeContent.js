import { useEffect, useState } from "react";
import styles from "./HomeContent.module.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import RecommondedSongs from "./RecommondedSongs";
import ExplorePremium from "./ExplorePremium";
import Footer from "./Footer";

function HomeContent(props) {
  let [sortBy, setSortBy] = useState("Recents");
  let [albumsData, setAlbums] = useState([]);
  let [tracks, setTracks] = useState([]);
  let [exPremimumFlag, setExPremimumFlag] = useState(false);
  let [musicFlag,setMusicFlag]=useState(true);
  
  function funChange(event) {
    console.log(event.target.innerText);
    setSortBy(event.target.innerText);
    try {
      console.log(albumsData[0].albums[3].name);
    } catch (e) {
      console.log("error");
    }
  }
  function getFlagFormExPrem(flag){
    setExPremimumFlag(flag);
    setMusicFlag(true);

  }
  useEffect(() => {
    setAlbums(JSON.parse(localStorage.getItem("albums")));
    setTracks(JSON.parse(localStorage.getItem("tracks")));
    setExPremimumFlag(props.exPremimumFlag);
    setMusicFlag(true);
    if(props.exPremimumFlag==true){
      setMusicFlag(false);
    }
    
  }, [props]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.columns} id={styles.column1}>
          <div className={styles.content}>
            <div className={styles.columnHeading}>
              <h6>
                <strong>Your Library</strong>
                <button type="button" class="btn" data-bs-toggle="tooltip" data-bs-placement="top" title="Create a playlist">+</button>
              </h6>
            </div>
            <div className={styles.dropdownContainer}>
              <h6 id={styles.sortIndicator}>{sortBy}</h6>
              <div class="dropdown">
                <button class="btn btn-secondary" type="button" data-bs-toggle="dropdown" aria-expanded="false" id={styles.dropdownButton}>
                  <i class="bi bi-list-ul"></i>
                </button>
                <ul class="dropdown-menu dropdown-menu-dark" id={styles.dropdownlist}>
                  <li><p class="dropdown-item" id={styles.liText}>Sort</p></li>
                  <li><a class="dropdown-item" href="#" onClick={funChange}>Recents</a></li>
                  <li><a class="dropdown-item" href="#" onClick={funChange}>Recently Added</a></li>
                  <li><a class="dropdown-item" href="#" onClick={funChange}>Alphabetical</a></li>
                  <li><a class="dropdown-item" href="#" onClick={funChange}>Creator</a></li>
                </ul>
              </div>
            </div>

            <div className={styles.playListCardContainer}>
              <div className={styles.playListCard}>
                <img src="Images\\music_Icon_image.png" className={styles.playlistImg} />
                <div className={styles.cardText}>
                  <p>
                    Playlist#1 <br />
                    Playlist<i class="bi bi-dot"></i> <br />
                    Sarthak-Darade
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
              {/* ----------------------column2 ---------------------------------*/}
        <div className={styles.columns} id={styles.column2}>
          <div className={styles.content}>
            {musicFlag && <RecommondedSongs></RecommondedSongs>} 
            {exPremimumFlag && <ExplorePremium setExPremiumClose={getFlagFormExPrem} flag={exPremimumFlag}></ExplorePremium>} 
            <Footer></Footer>
          </div>
        </div>

        <div className={styles.columns} id={styles.column3}>
          <div className={styles.content}></div>
        </div>
      </div>
      
    </>
  );
}

export default HomeContent;

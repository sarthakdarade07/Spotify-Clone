import { useEffect, useState } from "react";
import styles from "./HomeContent.module.css";
import RecommondedSongs from "./RecommondedSongs";
import ExplorePremium from "./ExplorePremium";
import Footer from "./Footer";
import { Route, Routes } from "react-router-dom";
import InstallApp from "./InstallApp";
import Tracks from "./Tracks";
import ScrollToTop from "./ScrollToTop";
import CurrPlayingSong from "./CurrPlayingSong";

function HomeContent(props) {
  let [sortBy, setSortBy] = useState("Recents");
  let [trackName, setTrackName] = useState("");
  //song is representing currunt playing song
  let [song, setSong] = useState();
   let [styleCol,setStyleCol]=useState();
   let [styleCol2, setStyleCol2] = useState();
   let [styleCol3, setStyleCol3] = useState();
  
 
  function funChange(event) {
    setSortBy(event.target.innerText);
  }

  useEffect(()=>{
     if(!song){
      let styleColtemp = {
         height:85+"vh",
      };
      setStyleCol(styleColtemp);
     let  styleCol2temp={
        width:100+"%",
        height:85+"vh",
      }
      setStyleCol2(styleCol2temp);

     let styleCol3temp={
        display:'none',
      }
      setStyleCol3(styleCol3temp);
    }else{

      let styleColtemp = {
        height: 75 + "vh",
      };
      setStyleCol(styleColtemp);
      let styleCol2temp = {
        width: 60 + "%",
        height: 75 + "vh",
      };
      setStyleCol2(styleCol2temp);

      let styleCol3temp = {
        display:"flex",
      };
      setStyleCol3(styleCol3temp);

    }

    
  },[song])
  

  return (
    <>
      <div className={styles.container}>
        <div className={styles.columns} style={styleCol}>
          <div className={styles.content}>
            <div className={styles.columnHeading}>
              <h6>
                <strong>Your Library</strong>
                <button
                  type="button"
                  className="btn"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Create a playlist">
                  +
                </button>
              </h6>
            </div>
            <div className={styles.dropdownContainer}>
              <h6 id={styles.sortIndicator}>{sortBy}</h6>
              <div class="dropdown">
                <button
                  className="btn btn-secondary"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  id={styles.dropdownButton}>
                  <i class="bi bi-list-ul"></i>
                </button>
                <ul
                  className="dropdown-menu dropdown-menu-dark"
                  id={styles.dropdownlist}>
                  <li>
                    <p class="dropdown-item" id={styles.liText}>
                      Sort
                    </p>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#" onClick={funChange}>
                      Recents
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#" onClick={funChange}>
                      Recently Added
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#" onClick={funChange}>
                      Alphabetical
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#" onClick={funChange}>
                      Creator
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className={styles.playListCardContainer}>
              <div className={styles.playListCard}>
                <img
                  src="Images\music_Icon_image.png"
                  className={styles.playlistImg}
                />
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
        <div className={styles.columns} id={styles.column2} style={styleCol2}>
          <ScrollToTop />
          <div className={styles.content}>
            <Routes>
              <Route
                path="/"
                element={
                  <RecommondedSongs
                    getTrackName={(name) => setTrackName(name)}
                  />
                }
              />
              <Route path="/explorepremium" element={<ExplorePremium />} />
              <Route path="/installapp" element={<InstallApp />} />
              <Route
                path="/music"
                element={
                  <RecommondedSongs
                    getTrackName={(name) => setTrackName(name)}
                  />
                }
              />
              <Route
                path="/tracks"
                element={
                  <Tracks
                    trackName={trackName}
                    getSong={(param) => {
                      setSong(param);
                    }}
                  />
                }
              />
              <Route path="*" element={<div>404 Not Found</div>} />
            </Routes>
            <Footer></Footer>
          </div>
        </div>
        {/* ---------------------------------------column3------------------------------------- */}
        <div className={styles.columns} style={styleCol3}>
          {song && (
            <CurrPlayingSong
              song={song}
              getCurrSong={(obj) => {
                props.getPlayingSong(obj);
              }}
            />
          )}
          <div className={styles.content}></div>
        </div>
      </div>
    </>
  );
}

export default HomeContent;

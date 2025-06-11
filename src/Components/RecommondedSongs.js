import { useEffect, useState } from "react";
import styles from "./HomeContent.module.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


function RecommondedSongs() {
  let [albumsData, setAlbums] = useState([]);
  let [tracks, setTracks] = useState([]);

  function funScrollLeft(name) {
    var scrollContainer = document.querySelector("#" + name);
    scrollContainer.scrollLeft += 650;
  }

  function funScrollRight(name) {
    var scrollContainer = document.querySelector("#" + name);
    scrollContainer.scrollLeft -= 650;
  }


  useEffect(() => {
    setAlbums(JSON.parse(localStorage.getItem("albums")));
    setTracks(JSON.parse(localStorage.getItem("tracks")));
  }, []);
  return (
    <>
       
      <h4 className={styles.reomandationHeader}>Popular Albums</h4>

      {/* -------------------------------------------cardSlider -------------------------------------- */}
      {albumsData.map((xc, ind) => {
        var containerName = "container" + ind;
        return (
          <div className={styles.cardSlider} id={ind}>
            <button type="button" class="btn btn-dark" id={styles.moveBtnLeft} onClick={() => {funScrollRight(containerName)}}>
              <i class="fa-solid fa-arrow-left"></i>
            </button>
            <div className={styles.CardWrapper} id={containerName}>
              <div className={styles.cardContainer}>
                {albumsData.map((x, i) => {
                  var albumName;
                  var artistNames;
                  var imagesLinks;
                  try {
                    albumName = x.albums[ind].name;
                    artistNames = x.artist;
                    imagesLinks = x.albums[ind].images[0].url;

                    return (
                      <>
                        <div class="card" id={styles.card}>
                          <a href="#" className={styles.cardLink}>
                            <img
                              src={imagesLinks}
                              class="card-img-top"
                              alt="..."
                            />
                            <div class="card-body">
                              <p class="card-title">{albumName}</p>
                              <p class="card-text">{artistNames}</p>
                            </div>
                          </a>
                          <button className={styles.cardFloatingPlayBtn}>
                            <i class="fa-solid fa-play"></i>
                          </button>
                        </div>
                      </>
                    );
                  } catch (e) {
                    console.log("error");
                  }
                })}
              </div>
            </div>
            <button
              type="button"
              class="btn btn-dark"
              id={styles.moveBtnRight}
              onClick={() => {
                funScrollLeft(containerName);
              }}
            >
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        );
      })}
      
    </>
  );
}

export default RecommondedSongs;

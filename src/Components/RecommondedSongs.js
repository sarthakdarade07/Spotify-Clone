import { useEffect, useState } from "react";
import styles from "./HomeContent.module.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function RecommondedSongs() {
  let [albumsData, setAlbums] = useState([]);
  let [tracks, setTracks] = useState([]);


  function funScrollLeft(name) {

    var scrollContainer = document.querySelector('#'+name);
    scrollContainer.scrollLeft += 400;
  }

  function funScrollRight(name) {
    var scrollContainer = document.querySelector("#" + name);
    scrollContainer.scrollLeft -= 400;
  }

  useEffect(() => {
    setAlbums(JSON.parse(localStorage.getItem("albums")));
    setTracks(JSON.parse(localStorage.getItem("tracks")));
  }, []);
  return (
    <>
      <h4 className={styles.reomandationHeader}>Show To Try</h4>

      {/* -------------------------------------------cardSlider -1------------------------------------- */}
      <div className={styles.cardSlider}>
        <button
          type="button"
          class="btn btn-dark"
          id={styles.moveBtns}
          onClick={() => {
            funScrollRight("container1");
          }}
        >
          <i class="fa-solid fa-arrow-left"></i>
        </button>
        <div className={styles.CardWrapper} id="container">
          <div className={styles.cardContainer}>
            {albumsData.map((x) => {
              var albumName;
              var artistNames;
              var imagesLinks;
              try {
                albumName = x.albums[0].name;
                artistNames = x.artist;
                imagesLinks = x.albums[0].images[0].url;
                return (
                  <>
                    <div class="card" id={styles.card}>
                      <a href="#" className={styles.cardLink}>
                        <img src={imagesLinks} class="card-img-top" alt="..." />
                        <div class="card-body">
                          <p class="card-title">{albumName}</p>
                          <p class="card-text">{artistNames}</p>
                        </div>
                      </a>
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
          id={styles.moveBtns}
          onClick={() => {
            funScrollLeft("container1");
          }}
        >
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
      {/* -------------------------------------------cardSlider -2------------------------------------- */}
      <div className={styles.cardSlider}>
        <button
          type="button"
          class="btn btn-dark"
          id={styles.moveBtns}
          onClick={() => {
            funScrollRight("container2");
          }}
        >
          <i class="fa-solid fa-arrow-left"></i>
        </button>
        <div className={styles.CardWrapper} id="container2">
          <div className={styles.cardContainer}>
            {albumsData.map((x) => {
              var albumName;
              var artistNames;
              var imagesLinks;
              try {
                albumName = x.albums[1].name;
                artistNames = x.artist;
                imagesLinks = x.albums[1].images[0].url;
                return (
                  <>
                    <div class="card" id={styles.card}>
                      <a href="#" className={styles.cardLink}>
                        <img src={imagesLinks} class="card-img-top" alt="..." />
                        <div class="card-body">
                          <p class="card-title">{albumName}</p>
                          <p class="card-text">{artistNames}</p>
                        </div>
                      </a>
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
          id={styles.moveBtns}
          onClick={() => {
            funScrollLeft("container2");
          }}
        >
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
      {/* -------------------------------------------cardSlider -3------------------------------------- */}
      <div className={styles.cardSlider}>
        <button
          type="button"
          class="btn btn-dark"
          id={styles.moveBtns}
          onClick={() => {
            funScrollRight("container3");
          }}
        >
          <i class="fa-solid fa-arrow-left"></i>
        </button>
        <div className={styles.CardWrapper} id="container3">
          <div className={styles.cardContainer}>
            {albumsData.map((x) => {
              var albumName;
              var artistNames;
              var imagesLinks;
              try {
                albumName = x.albums[2].name;
                artistNames = x.artist;
                imagesLinks = x.albums[2].images[0].url;
                return (
                  <>
                    <div class="card" id={styles.card}>
                      <a href="#" className={styles.cardLink}>
                        <img src={imagesLinks} class="card-img-top" alt="..." />
                        <div class="card-body">
                          <p class="card-title">{albumName}</p>
                          <p class="card-text">{artistNames}</p>
                        </div>
                      </a>
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
          id={styles.moveBtns}
          onClick={() => {
            funScrollLeft("container3");
          }}
        >
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
      {/* -------------------------------------------cardSlider -4------------------------------------- */}
      <div className={styles.CardWrapper}>
        <div className={styles.cardContainer}>
          {albumsData.map((x) => {
            var albumName;
            var artistNames;
            var imagesLinks;
            try {
              albumName = x.albums[3].name;
              artistNames = x.artist;
              imagesLinks = x.albums[3].images[0].url;
              return (
                <>
                  <div class="card" id={styles.card}>
                    <a href="#" className={styles.cardLink}>
                      <img src={imagesLinks} class="card-img-top" alt="..." />
                      <div class="card-body">
                        <p class="card-title">{albumName}</p>
                        <p class="card-text">{artistNames}</p>
                      </div>
                    </a>
                  </div>
                </>
              );
            } catch (e) {
              console.log("error");
            }
          })}
        </div>
      </div>

      {/* -------------------------------------------cardSlider -5------------------------------------- */}
      <div className={styles.CardWrapper}>
        <div className={styles.cardContainer}>
          {albumsData.map((x) => {
            var albumName;
            var artistNames;
            var imagesLinks;
            try {
              albumName = x.albums[4].name;
              artistNames = x.artist;
              imagesLinks = x.albums[4].images[0].url;
              return (
                <>
                  <div class="card" id={styles.card}>
                    <a href="#" className={styles.cardLink}>
                      <img src={imagesLinks} class="card-img-top" alt="..." />
                      <div class="card-body">
                        <p class="card-title">{albumName}</p>
                        <p class="card-text">{artistNames}</p>
                      </div>
                    </a>
                  </div>
                </>
              );
            } catch (e) {
              console.log("error");
            }
          })}
        </div>
      </div>
    </>
  );
}

export default RecommondedSongs;

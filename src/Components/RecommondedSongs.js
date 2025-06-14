import { useContext, useEffect, useState } from "react";
import styles from "./HomeContent.module.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link, useNavigate } from "react-router-dom";
import { NavLink } from "react-bootstrap";


function RecommondedSongs(props) {
  let [albumsData, setAlbums] = useState([]);
  const navigate = useNavigate();



  function funFullscreen() {
    navigate("/songs");
  }

  function funScrollLeft(name) {
    var scrollContainer = document.querySelector("#" + name);
    scrollContainer.scrollLeft += 650;
  }

  function funScrollRight(name) {
    var scrollContainer = document.querySelector("#" + name);
    scrollContainer.scrollLeft -= 650;
  }

  // function to set selected track
  function sendTrackRequest(albumName, artistNames, imagesLinks) {
    var obj={albumName:albumName,artistNames:artistNames,imagesLinks:imagesLinks}
    props.getTrackName(obj);
    navigate("/tracks");
  }

  useEffect(() => {
    setAlbums(JSON.parse(localStorage.getItem("albums")));
  }, [props]);
  return (
    <>
      {" "}
      {/*--------------------------------- header buttons----------------- */}
      <div style={{ display: "flex", gap: "1%" }}>
        <button type="button" class="btn" id={styles.playListBtn}>
          All
        </button>{" "}
        <button
          type="button"
          class="btn"
          id={styles.playListBtn}
          style={{ backgroundColor: "white", color: "black" }}>
          Music
        </button>
        {"  "}
        <button type="button" class="btn" id={styles.playListBtn}>
          PodCasts
        </button>
        <div style={{ marginLeft: "60%", zIndex: "2000" }}>
          {/* --------------it has to update------------------- */}
          {/* <Link to="/songs">
            <button
              type="submit"
              class="btn btn-dark"
              style={{
                position: "fixed",
                borderRadius: "50%",
              }}>
              <i class="bi bi-arrows-fullscreen"></i>
            </button>
          </Link> */}
        </div>
      </div>
      <h4 className={styles.reomandationHeader}>Popular Albums</h4>

      {/* -------------------------------------------cardSlider -------------------------------------- */}
      {albumsData.map((xc, ind) => {
        var containerName = "container" + ind;
        return (
          <div className={styles.cardSlider} id={ind}>
            <button
              type="button"
              class="btn btn-dark "
              id={styles.moveBtnLeft}
              onClick={() => {
                funScrollRight(containerName);
              }}>
              <i class="fa-solid fa-arrow-left"></i>
            </button>
            <div className={styles.CardWrapper} id={containerName}>
              <div className={styles.cardContainer}>
                {albumsData.map((x) => {
                  var albumName;
                  var artistNames;
                  var imagesLinks;
                  try {
                    albumName = x.albums[ind].name;
                    artistNames = x.artist;
                    imagesLinks = x.albums[ind].images[0].url;

                    return (
                      <>
                        <NavLink>
                          <div
                            class="card"
                            id={styles.card}
                            onClick={() => {
                              sendTrackRequest(albumName,artistNames,imagesLinks);
                            }}>
                            <cardBody className={styles.cardLink}>
                              <img
                                src={imagesLinks}
                                class="card-img-top"
                                alt="none"
                              />
                              <div class="card-body">
                                <p class="card-title">{albumName}</p>
                                <p class="card-text">{artistNames}</p>
                              </div>
                            </cardBody>
                            <button className={styles.cardFloatingPlayBtn}>
                              <i class="fa-solid fa-play"></i>
                            </button>
                          </div>
                        </NavLink>
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
              }}>
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        );
      })}
    </>
  );
}

export default RecommondedSongs;

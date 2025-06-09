import { useState } from "react";
import styles from "./HomeContent.module.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function HomeContent() {
  let[sortBy,setSortBy]=useState("Recents");

  function funChange(event){
    console.log("hi");
      console.log(event.target.innerText);
      setSortBy(event.target.innerText);

  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.columns} id={styles.column1}>
          <div className={styles.content}>
            <div className={styles.columnHeading}>
              <h6>
                <strong>Your Library</strong>
                <button
                  type="button"
                  class="btn"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Create a playlist"
                >
                  + Create
                </button>
              </h6>
            </div>
            <div className={styles.dropdownContainer}>
              <button type="button" class="btn" id={styles.playListBtn}>
                Playlist
              </button>
              <h6 id={styles.sortIndicator}>{sortBy}</h6>
              <div class="dropdown">
                <button
                  class="btn btn-secondary"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  id={styles.dropdownButton}
                >
                  <i class="bi bi-list-ul"></i>
                </button>
                <ul
                  class="dropdown-menu dropdown-menu-dark"
                  id={styles.dropdownlist}
                >
                  <li>
                    <p class="dropdown-item " id={styles.liText}>
                      Sort
                    </p>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="#"
                      onClick={(event) => {
                        funChange(event);
                      }}
                    >
                      Recents
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="#"
                      onClick={(event) => {
                        funChange(event);
                      }}
                    >
                      Recently Added
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="#"
                      onClick={(event) => {
                        funChange(event);
                      }}
                    >
                      Alphabetical
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="#"
                      onClick={(event) => {
                        funChange(event);
                      }}
                    >
                      Creator
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <p class="dropdown-item" id={styles.liText}>
                      view as
                    </p>
                  </li>
                  <li>
                    <div id={styles.viewasContainer}>hi</div>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.playListCardContainer}>
              <div className={styles.playListCard}>
                <img src="Images\spotify_nav_logo.png" className={styles.playlistImg}/>
                <div className={styles.cardText}>
                  <h6>Playlist#1</h6>
                  <p>Playlist<i class="bi bi-dot"></i>Sarthak-Darade</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.columns} id={styles.column2}>
          <div className={styles.content}></div>
        </div>
        <div className={styles.columns} id={styles.column3}>
          <div className={styles.content}></div>
        </div>
      </div>
    </>
  );
}

export default HomeContent;

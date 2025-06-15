import { Table } from "react-bootstrap";
import styles from "./Tracks.module.css";
import { useEffect, useState } from "react";
import ScrollToTop from "./ScrollToTop";

function Tracks(props) {
  const [trackList, setTrackList] = useState([]);
  const [track, setTrack] = useState([]);
  const [selectedTrack, setSelectedTrack] = useState({});

  // Filter and set tracks based on album ID
  function searchTrack(list, albumId) {
    try {
      const tempArr = list.filter((x) => x.album === albumId);
      if (tempArr.length > 0 && tempArr[0].tracks) {
        setTrack(tempArr[0].tracks);
      } else {
        setTrack([]);
      }
    } catch (e) {
      console.log("error in searchTrack", e);
    }
  }

  // Handle song play
  function playMusic(x) {
    var obj = [x];
    props.getSong(obj);
  }

  //use to calculate time
  const calTime = (sec) => {
    sec=sec*0.001;
    const mins = Math.floor(sec / 60);
    const returnedMins = mins < 10 ? `0${mins}` : `${mins}`;
    const seconds = Math.floor(sec % 60);
    const returnedseconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

    return `${returnedMins}:${returnedseconds}`;
  };

  // Main logic to persist selectedTrack on refresh
  useEffect(() => {
    const list = JSON.parse(localStorage.getItem("tracks")) || [];
    setTrackList(list);

    // If props has trackName, use and save it
    if (props.trackName && props.trackName.albumId) {
      setSelectedTrack(props.trackName);
      localStorage.setItem("selectedTrack", JSON.stringify(props.trackName));
      searchTrack(list, props.trackName.albumId);
    } else {
      // If props is empty (e.g. on refresh), restore from localStorage
      const savedTrack = JSON.parse(localStorage.getItem("selectedTrack"));
      if (savedTrack && savedTrack.albumId) {
        setSelectedTrack(savedTrack);
        searchTrack(list, savedTrack.albumId);
      }
    }
    // Scroll to top
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [props]);

  return (
    <>
      <ScrollToTop />
      <div className={styles.artistDiv}>
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={selectedTrack.imagesLinks}
                className={styles.albumImg}
                alt="Album"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Public PlayList</h5>
                <h1>{selectedTrack.albumName}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Table variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>
              <i className="bi bi-clock"></i>
            </th>
          </tr>
        </thead>
        <tbody>
          {track.map((x, index) => (
            <tr
              key={index}
              onClick={() => {
                playMusic(x);
              }}>
              <td>{index + 1}</td>
              <td>{x.name}</td>
              <td>{calTime(x.duration_ms)} mins</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default Tracks;

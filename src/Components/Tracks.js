import { Table } from "react-bootstrap";
import styles from "./TrackList.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

function Tracks(props) {
  const [trackList, setTrackList] = useState([]);
  const [track, setTrack] = useState([]);
  const [selectedTrack, setSelectedTrack] = useState({});

  // Update selectedTrack when props.trackName changes
  useEffect(() => {
    setSelectedTrack(props.trackName || {});
  }, [props.trackName]);

  function searchTrack(list, albumId) {
    try {
      const tempArr = list.filter((x) => x.album === albumId);
      if (tempArr.length > 0 && tempArr[0].tracks) {
        setTrack(tempArr[0].tracks);
      } else {
        setTrack([]);
      }
    } catch (e) {
      console.log('error');
    }
  }

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem("tracks")) || [];
    setTrackList(list);
    if (props.trackName && props.trackName.albumId) {
      searchTrack(list, props.trackName.albumId);
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [props.trackName]);

  return (
    <>
    <ScrollToTop/>
      <div className={styles.artistDiv}>
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={selectedTrack.imagesLinks}
                className={styles.albumImg}
                alt=""
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
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{x.name}</td>
              <td>{(parseInt(x.duration_ms) * 0.00001667).toFixed(2)} mins</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default Tracks;

import { Table } from "react-bootstrap";
import styles from "./TrackList.module.css";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function Tracks(props) {
let [trackList,setTrackList]=useState([]);
let [track, setTrack] = useState([]);
// here track is an Object containing the tracks details whatever album is clicked by
// use from recommentation 
//trackList containing all tracks
// props.trackName is object got from recommondation component

function searchTrack(list) {
  try {
    var tempArr = list.filter((x) => {
      console.log(x);
      if (x.album === props.trackName.albumId) {
        return x;
      }
    });
    if (tempArr.length > 0 && tempArr[0].tracks) {
      setTrack(tempArr[0].tracks);
    } else {
      setTrack([]);
    }
  } catch (e) {
    console.log('error');
  }
}
console.log(track);

  useEffect(() => {
  var list=(JSON.parse(localStorage.getItem("tracks")))
  setTrackList(list)
    searchTrack(list); 
  }, [props.trackName]);

  return (
    <>
      <div className={styles.artistDiv}>
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src={props.trackName.imagesLinks}
                className={styles.albumImg}
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Public PlayList</h5>
                <h1>{props.trackName.albumName}</h1>
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
              <i class="bi bi-clock"></i>
            </th>
          </tr>
        </thead>
        {track.map((x, index) => {
          try {
            return (
              <tbody>
                <tr key={index}>
                  <td>{index + 1}</td>
                  {/* <td><img src="Images\music_Icon_image.png" className={styles.songImg}/></td> */}
                  <td>{x.name}</td>
                  <td>{(parseInt(x.duration_ms) * 0.00001667).toFixed(2)} mins</td>
                </tr>
              </tbody>
            );
          } catch (e) {}
        })}
      </Table>
    </>
  );
}

export default Tracks;

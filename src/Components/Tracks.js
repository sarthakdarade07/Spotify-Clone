import { Table } from "react-bootstrap";
import styles from "./TrackList.module.css";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import TrackContext from "./TrackContext";
function Tracks(props) {
  let {trackName,setTrackName}=useContext(TrackContext);
  
  console.log(trackName);
  useEffect(()=>{
      console.log(trackName);
  },[props])

  return (
    <>
    <Link to="/">Click</Link>
      <div className={styles.artistDiv}>
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="Images\arjit.jpg" className={styles.cardImg} />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Public PlayList</h5>
                <h1>Arjit Singh Radio</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Table variant="dark">
        <thead>
          <tr>
            <th>#Title</th>
            <th>Songs</th>
            <th>Date added</th>
            <th>
              <i class="bi bi-clock"></i>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src="https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228"></img>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default Tracks;

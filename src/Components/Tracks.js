import { Dropdown, Table } from "react-bootstrap";
import styles from "./Tracks.module.css";
import { useEffect, useState } from "react";
import ScrollToTop from "./ScrollToTop";

function Tracks(props) {
  const [trackList, setTrackList] = useState([]);
  const [track, setTrack] = useState([]);
  const [selectedTrack, setSelectedTrack] = useState({});
  //it is set when favList req is sent
  //  also for pop up
  const [renderFlag,setRenderFlag]=useState(false); 
  const [favListFlag, setFavListFlag] = useState(false);
  const [favList,setFavList]=useState([]);
  const [popObj,setPopObj]=useState();
   
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
    sec = sec * 0.001;
    const mins = Math.floor(sec / 60);
    const returnedMins = mins < 10 ? `0${mins}` : `${mins}`;
    const seconds = Math.floor(sec % 60);
    const returnedseconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMins}:${returnedseconds}`;
  };

  //function is used to add track to favourites
  function funAddFav(x) {
    let favTracksArr=[];
    
    if(localStorage.getItem("favList")){
      favTracksArr=JSON.parse(localStorage.getItem("favList"));
    }

    favTracksArr.push(x);
    localStorage.setItem("favList",JSON.stringify(favTracksArr));
    
    var obj = {
      message: "Added to favourites",
      bgColor: "#1B9064",
      icon:"bi bi-check2-circle",
    };
    setPopObj(obj);
    props.getPopUpObj(obj);
    
  }

  //remove track from fav list
  function funRemoveFromFav(x) {
   
    if (isfavourite(x)==false){

      var obj = {
        message: "Song is not in Favourites",
        bgColor: "#FFBF4B",
        icon: "bi bi-x-circle",
      };
      setPopObj(obj);
      props.getPopUpObj(obj);
    }
    else{
      let favTracksArr = [];

      if (localStorage.getItem("favList")) {
        favTracksArr = JSON.parse(localStorage.getItem("favList"));
      }
      favTracksArr = favTracksArr.filter((i) => {
        if (i.id != x.id) {
          return i;
        }
      });

      localStorage.setItem("favList", JSON.stringify(favTracksArr));
      setRenderFlag(!renderFlag);

      var obj = {
        message: "Removed from favourites",
        bgColor: "#DA3D55",
        icon: "bi bi-trash3",
      };
      setPopObj(obj);
      props.getPopUpObj(obj);
    }
    
  }
 //function to check wheter track is already fav
  function isfavourite(x){
    let favTracksArr = [];

    if (localStorage.getItem("favList")) {
      favTracksArr = JSON.parse(localStorage.getItem("favList"));
    }
    favTracksArr = favTracksArr.filter((i) => {
      if (i.id === x.id) {
        return i;
      }
    });
   
    if(favTracksArr.length >0){
      return true;
    }else{
      return false
    }
 
   
  }


  //  to persist selectedTrack on refresh
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

    //it will set track and selected tract to favList
    if (props.favListFlag == true) {
      let favTracksArr = [];
      let tempArr = []; //it will have fav list title and image
      if (localStorage.getItem("favList")) {
        favTracksArr = JSON.parse(localStorage.getItem("favList"));
      }

      
      tempArr = {
        albumId: "none",
        albumName: "Favourite PlayList",
        artistNames: "Sarthak Darade",
        imagesLinks: "Images/Fav_List_Img.png",
      };

      setSelectedTrack(tempArr);
      setTrack(favTracksArr);
      console.log(selectedTrack);
    }

    // fetchFavList favList
    setFavList( JSON.parse(localStorage.getItem("favList")));

    // Scroll to top
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    

    return () => {
      setFavListFlag(false);
    };
  }, [props, renderFlag]);

  

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
          <tr style={{ width: "100%" }}>
            <th></th>
            <th>#</th>
            <th>Title</th>
            <th></th>
            <th>
              <i className="bi bi-clock"></i>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {track.map((x, index) => (
            <tr key={index}>
              <th>
                <button
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Play"
                  onClick={() => {
                    playMusic(x);
                  }}
                  className={styles.btnPlay}>
                  <i class="bi bi-play-fill" tooltip="play"></i>
                </button>
              </th>
              <td>{index + 1}</td>
              <td>{x.name}</td>
              <th>
                {/* add fav btn */}
                {isfavourite(x) ? (
                  <button
                    style={{ color: "green" }}
                    className={styles.addBtn}
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Favourite Track">
                    <i class="bi bi-heart-fill"></i>
                  </button>
                ) : (
                  <button
                    className={styles.addBtn}
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Add to favourites"
                    onClick={() => {
                      funAddFav(x);
                    }}>
                    <i class="bi bi-plus-circle"></i>
                  </button>
                )}
              </th>
              <td>{calTime(x.duration_ms)}</td>

              <th>
                <Dropdown
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Options">
                  <Dropdown.Toggle variant="dark">
                    <i class="bi bi-three-dots-vertical"></i>
                  </Dropdown.Toggle>

                  <Dropdown.Menu variant="dark">
                    <Dropdown.Item
                      onClick={() => {
                        funRemoveFromFav(x);
                      }}>
                      Remove from Favourites
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </th>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default Tracks;

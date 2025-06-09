import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import HomeContent from "./HomeContent";

function DisplayHomeSongs(props) {
  let [albums, setAlbums] = useState();
  let [tracks, setTracks] = useState();

  useEffect(() => {
    if (props.albums && props.tracks) {
      setAlbums(props.albums);
      setTracks(props.tracks);
    }
  }, [props.albums, props.tracks]);

  return (
    <>
      <NavBar></NavBar>
      <HomeContent></HomeContent>
    </>
  );
}

export default DisplayHomeSongs;

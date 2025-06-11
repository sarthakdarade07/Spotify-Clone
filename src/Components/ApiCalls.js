import { useEffect, useState } from "react";

function ApiCalls() {
  let [albumList, setAlbumList] = useState([]);
  let [token, setToken] = useState();
  let [trackList, setTracks] = useState([]);

  // const clientId = ""; // client id
  // const clientSecret = ""; //client Secret
   const clientId = "f6c37369929b48f5940aebb09fd23367";
   const clientSecret = "e5e0a6cc6f2542f48df6c9031a72b15c";
  const artistIds = [
    { id: "4YRxDV8wJFPHPTeXepOstw", name: "Arijit Singh" },
    { id: "0oOet2f43PA68X5RxKobEy", name: "Shreya Ghoshal" },
    { id: "1mYsTxnqsietFxj1OgoGbG", name: "Armaan Malik" },
    { id: "5f4QpKfy7ptCHwTqspnSJI", name: "Neha Kakkar" },
    { id: "4fEkbug6kZzzJ8eYX6Kbbp", name: "Sonu Nigam" },
    { id: "6eUKZXaKkcviH0Ku9w2n3V", name: "Ed-Sheeran" },
  ];

  async function getAccessToken() {
    let response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
      },
      body: "grant_type=client_credentials",
    });

    let result = await response.json();
    var tkn = await result.access_token;
    setToken(tkn);
    return tkn;
  }

  async function getAlbumsByArtist(artistId, token) {
    let res = await fetch(
      "https://api.spotify.com/v1/artists/" +
        artistId +
        "/albums?include_groups=album,single&limit=6",
      {
        method: "GET",
        headers: { Authorization: "Bearer " + token },
      }
    );
    let result = await res.json();
    return result.items;
  }

  async function getTracks(albumId, token) {
    let response = await fetch(
      "https://api.spotify.com/v1/albums/" + albumId + "/tracks",
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );

    let result = await response.json();

    return result.items;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = await getAccessToken();
        setToken(accessToken);

        // Parallel fetch of albums
        const allAlbums = await Promise.all(
          artistIds.map((artist) =>
            getAlbumsByArtist(artist.id, accessToken).then((albums) => ({
              artist: artist.name,
              albums: albums,
            }))
          )
        );
        if (allAlbums) {
          setAlbumList(allAlbums);
          localStorage.setItem("albums", JSON.stringify(allAlbums));
        }

        // Parallel fetch of tracks from all albums
        const allTracks = await Promise.all(
          allAlbums.flatMap((item) =>
            item.albums.map((album) =>
              getTracks(album.id, accessToken).then((tracks) => ({
                album: album.name,
                tracks: tracks,
              }))
            )
          )
        );
        if (allTracks) {
          setTracks(allTracks);
          localStorage.setItem("tracks", JSON.stringify(allTracks));
        }
      } catch (err) {
        console.error("Error fetching:", err);
      }
    };

    fetchData();
  }, []);
}

export default ApiCalls;

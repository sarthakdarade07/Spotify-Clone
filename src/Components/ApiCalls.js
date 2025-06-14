import { useEffect, useMemo, useState } from "react";

function ApiCalls() {
  let [albumList, setAlbumList] = useState([]);
  let [token, setToken] = useState();
  let [trackList, setTracks] = useState([]);

  // const clientId = ""; // client id
  // const clientSecret = ""; // client Secret
  // const clientId = "f6c37369929b48f5940aebb09fd23367";
  // const clientSecret = "e5e0a6cc6f2542f48df6c9031a72b15c";

  const clientId = "bb67dff9f47b4a018b86d2219fb6d7a5";
  const clientSecret = "d1e87675b3f94c93897ee0c003b657a5";

  const artistIds = [
    { id: "4YRxDV8wJFPHPTeXepOstw", name: "Arijit Singh" },
    { id: "0oOet2f43PA68X5RxKobEy", name: "Shreya Ghoshal" },
    { id: "1mYsTxnqsietFxj1OgoGbG", name: "Armaan Malik" },
    { id: "5f4QpKfy7ptCHwTqspnSJI", name: "Neha Kakkar" },
    { id: "4fEkbug6kZzzJ8eYX6Kbbp", name: "Sonu Nigam" },
    { id: "6eUKZXaKkcviH0Ku9w2n3V", name: "Ed-Sheeran" },
    { id: "1uNFoZAHBGtllmzznpCI3s", name: "Justin Bieber" },
    { id: "2oBG74gAocPMFv6Ij9ykdo", name: "Seedhe Maut" },
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
    var tkn = result.access_token;
    setToken(tkn);
    return tkn;
  }

  async function getAlbumsByArtist(artistId, token) {
    let res = await fetch(
      "https://api.spotify.com/v1/artists/" +
        artistId +
        "/albums?include_groups=album,single&limit=10",
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

  async function fetchWithRetry(fetchFunction, ...args) {
    for (let i = 0; i < 3; i++) {
      try {
        return await fetchFunction(...args);
      } catch (error) {
        if (error.response && error.response.status === 429) {
          console.log("Rate limit exceeded, retrying...");
          await new Promise((resolve) => setTimeout(resolve, 2000)); // Wait 2 seconds before retrying
        } else {
          throw error; // Rethrow if it's not a 429 error
        }
      }
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = await getAccessToken();
        setToken(accessToken);

        // Parallel fetch of albums
        const allAlbums = await Promise.all(
          artistIds.map((artist) =>
            fetchWithRetry(getAlbumsByArtist, artist.id, accessToken).then(
              (albums) => ({
                artist: artist.name,
                albums: albums,
              })
            )
          )
        );
        setAlbumList(allAlbums);
        localStorage.setItem("albums", JSON.stringify(allAlbums));

        // Parallel fetch of tracks from all albums
        const allTracks = await Promise.all(
          allAlbums.flatMap((item) =>
            item.albums.map((album) =>
              fetchWithRetry(getTracks, album.id, accessToken).then(
                (tracks) => ({
                  album: album.name,
                  tracks: tracks,
                })
              )
            )
          )
        );
        setTracks(allTracks);
        localStorage.setItem("tracks", JSON.stringify(allTracks));
      } catch (err) {
        console.error("Error fetching:", err);
      }
    };

    fetchData();
  }, []);
}

export default ApiCalls;

import React, { useState, useEffect } from "react";
import "./Home.scss";
import AlbumCover from "./AlbumCover.svg";
import Girl from "./Girl.svg";
import Play from "./Play.svg";
import Favorite from "./Favorite.svg";
import { spotifyUrl } from "../../pages/Login/Spotify";
import SpotifyWebApi from "spotify-web-api-node";
import Player from "../../Player";
import Spotify from "../../pages/Login/Spotify";
import Music from "./Music.png";
import SpotifyPlayer from "react-spotify-web-playback";

import { Link, useNavigate } from "react-router-dom";

export default function Home(props) {
  const accessToken = props.accessToken;

  const navigate = useNavigate();

  const [albums, setAlbums] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [playingTrack, setPlayingTrack] = useState("");
  const [error, setError] = useState("");

  const spotifyApi = new SpotifyWebApi({
    clientId: "4a6aefbd2dfa456f8c7a15211f7b481f",
    accessToken: accessToken,
  });

  // function handlePlay() {
  //   setPlayingTrack(track);

  // }

  useEffect(() => {
    spotifyUrl.get("me/playlists").then((response) => {
      setPlaylists(response.data.items);
      // console.log(response.data.items);
    });
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    spotifyApi.searchTracks(search).then((response) => {
      setSearchResults(response.body.tracks.items);
      console.log(response.body.tracks.items);
    });
  };

  function logout(e) {
    e.preventDefault();
    console.log("Logout");
    localStorage.clear();
    sessionStorage.clear();
    navigate("/spotify");
  }

  return (
    <>
      <div className="home">
        <div className="topnav">
          <p></p>
          <img src={Music} width={50} height={50} />
          <div className="">
            <p className="logout" onClick={logout}>
              Logout
            </p>
          </div>
        </div>
        <div className="body">
          <div className="form">
            <form onSubmit={handleClick}>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                required
                type="search"
                placeholder="Search for an song/artist"
              />
              <button type="submit">Submit</button>
            </form>
          </div>

          {accessToken ? (
            <div className="grid">
              <div className="top">
                {search ? (
                  <ul className="top-grid">
                    {searchResults.length > 0
                      ? searchResults.map((track) => (
                          <li
                            className="popular"
                            key={track.uri}
                            onClick={() => {
                              setPlayingTrack(track.album.artists[0].uri);
                            }}
                          >
                            <div>
                              <div>
                                <img
                                  src={track.album.images[0].url}
                                  width={80}
                                />
                              </div>
                              <p>{track.name}</p>
                            </div>
                          </li>
                        ))
                      : null}
                  </ul>
                ) : null}
                {/* <h3>Search Result</h3> */}
              </div>
              <div>
                <div className="center">
                  <p>Albums</p>

                  <div className="center-grid">
                    <ul className="albums">
                      {playlists.map((item) => (
                        <li key={item.id} className="album">
                          <div className="image-container">
                            <img src={item.images[0].url} />
                          </div>
                          <p className="text">{item.name}</p>
                          <img src={Play} width={24} onClick={() => item.uri} />
                        </li>
                      ))}
                    </ul>
                    {/* <div className="lyrics">
                    <p>Lyrics</p>
                  </div> */}
                  </div>
                </div>
                <div className="bottom"></div>
              </div>
              <div>
                {/* <SpotifyPlayer token={accessToken} /> */}
                {/* <Player accessToken={accessToken} trackUri={playingTrack} /> */}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}

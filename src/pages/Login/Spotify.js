import React from "react";
import axios from "axios";

const CLIENT_ID = "4a6aefbd2dfa456f8c7a15211f7b481f";
const REDIRECT_URI = "http://localhost:3000";
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize?";
const SCOPES = [
  "user-library-read",
  "playlist-read-private",
  "streaming",
  "user-read-recently-played",
];

const loginEndpoint = `${AUTH_ENDPOINT}client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES.join(
  "%20"
)}&response_type=token&show_dialog=true`;

export const spotifyUrl = axios.create({
  baseURL: "https://api.spotify.com/v1/",
});

export const clientToken = (token) => {
  spotifyUrl.interceptors.request.use(async function (config) {
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  });
};

export default function Spotify() {
  return (
    <>
      <div>
        <a href={loginEndpoint}>Login with Spotify</a>
      </div>
    </>
  );
}

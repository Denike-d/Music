import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Spotify from "./pages/Login/Spotify";
import { clientToken } from "./pages/Login/Spotify";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [token, setToken] = useState("");
  const[timeout, setTimeout] = useState();

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    // console.log(hash);
    console.log("Hello");
    window.location.hash = "";
    if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
      clientToken(_token);
    } else {
      setToken(token);
      clientToken(token);
    }
  }, []);



  return !token || token === "null" ? (
    <Spotify />
  ) : (
    <Routes>
      <Route path="/" element={<Dashboard accessToken={token} />} />
      <Route path="/spotify" element={<Spotify />} />
      {/* <Route path="/login" element={<Login />} /> */}
    </Routes>
  );
}

export default App;

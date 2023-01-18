import React from "react";
import Sidebar from "../../component/Sidebar/Sidebar";
// import "./Dashboard.scss";
import Home from "../Home/Home";

export default function Dashboard(props) {
  const accessToken = props.accessToken;

  return (
    <div className="dashboard">
      {/* <Sidebar /> */}
      <main>
        <Home accessToken={accessToken} />
      </main>
    </div>
  );
}

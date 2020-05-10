import React from "react";
// import logo from "./logo.svg";
import "./Loading.css";

const style = {
  width: "48px",
  height: "48px",
  backgroundColor: "transparent",
  borderRadius: "50%",
  border: "8px solid rgba(0,0,0,0.3)",
  borderTopColor: "rgba(0,0,0,0.75)",
};

const Loading = () => {
  return (
    <div className="xyz">
      <div className="activityIndicator" style={style}></div>
    </div>

    // <div className="loading">
    //   <div></div>
    //   <div></div>
    // </div>
  );
};

export default Loading;

import React from "react";
import logo from "./logo.png";

function PreLoad(props) {
  return (
    <>
      <div id={props.load ? "preloader" : "preloader-none"}>
        <img src={logo} alt="Logo" style={{ height: "60%", width: "60%" }} />
      </div>
    </>
  );
}

export default PreLoad;
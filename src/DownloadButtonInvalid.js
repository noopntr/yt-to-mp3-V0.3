import React from "react";
import gif from "./gif.gif";

function DownloadButtonInvalid() {
  return (
    <div style={{ margin: "20px" }}>
      <h1 style={{ color: "red" }}>Invalid url</h1>
      <br />
      <p>Please try again on this way  <span role='img' aria-label='Emoji'>👇</span></p>
      <img src={gif} alt="tutorial" />
    </div>
  );
}

export default DownloadButtonInvalid;

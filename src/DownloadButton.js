/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import "./DownloadButton.css";

function DownloadButton({ id, type }) {
  return (
    <div className="download">
      <iframe class="button-api-frame"
        src={`https://www.yt2mp3s.me/@api/button/${type}/${id}`}
        width="100%" height="100%" 
        allowtransparency="true" 
        scrolling="yes"
        style={{border:"none"}} />
    </div>
  );
}



export default DownloadButton;

import React, { useEffect, useState } from "react";
import "./App.css";
import DownloadButton from "./DownloadButton";
import DownloadButtonDefault from "./DownloadButtonDefault";
import DownloadButtonInvalid from "./DownloadButtonInvalid";
import googleAds from "./googleAds";

function App() {
  const [videoUrl, setVideoUrl] = useState("");
  const [id, setId] = useState("");
  let videoLink

  videoUrl.includes('https://youtu.be/') ?
   videoLink = videoUrl.replace('https://youtu.be/', '') :
    videoLink = videoUrl.replace('https://www.youtube.com/watch?v=', '')
     

  useEffect(() => {
    let id = videoLink
    console.log(id);
    setId(id);
  }, [videoLink]);

  return (
    <div className="app">
      <div className="app__linkBox">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            placeholder="Paste youtube video url here..."
          />
        </form>    
      </div>

      {videoUrl === "" ? (
        <DownloadButtonDefault />
      ) : (
        <div>
          {videoUrl.startsWith("https://www.youtube.com/watch?v=") ||
          videoUrl.startsWith("https://youtube.com/watch?v=") ||
          videoUrl.startsWith("www.youtube.com/watch?v=") ||
          videoUrl.startsWith("youtube.com/watch?v=") ||
          videoUrl.startsWith("v=") ||
          videoUrl.startsWith("https://youtu.be/") ||
          videoUrl.startsWith("www.youtu.be/") ||
          videoUrl.startsWith("youtu.be/") ? (
            <div>
              <DownloadButton id={id} type="mp3" />
              <br />
              <DownloadButton id={id} type="videos" />
            </div>
          ) : (
            <DownloadButtonInvalid />
          )}
        </div>
      )}
        <googleAds></googleAds>
    </div>
  );
}

export default App;

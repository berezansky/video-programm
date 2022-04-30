import React, { useState } from 'react';
import { PlayList } from './components/PlayList/PlayList';
import { VideoData } from './components/VideoData/VideoData';
import { VideoPlayer } from './components/VideoPlayer/VideoPlayer';
import videoList from './mock/videoList.json';

import './app.css';

function App() {
  const [currentVideo, setCurrentVideo] = useState(videoList[0]);

  return (
    <div className="App">
      <div className="wrapper">
        <VideoPlayer source={currentVideo.link} />
        <PlayList playlist={videoList} />
      </div>
      <VideoData title={currentVideo.title} />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import { PlayList } from './components/PlayList/PlayList';
import { VideoData } from './components/VideoData/VideoData';
import { VideoPlayer } from './components/VideoPlayer/VideoPlayer';
import videoList from './mock/videoList.json';

import './app.css';
import { IVideoList } from './Consts/Consts';

function App() {
  const [currentVideo, setCurrentVideo] = useState(videoList[0]);
  const [isTheatreMode, setIsTheatreMode] = useState(false);

  const handleChangeVideo = (video: IVideoList) => () => {
    setCurrentVideo(video);
  }

  const handleToggleTheatreMode = () => {
    setIsTheatreMode((value) => !value);
  }

  return (
    <div className="App">
      <div className="wrapper">
        <VideoPlayer onToggleTheatreMode={handleToggleTheatreMode} source={currentVideo.link} />
        {!isTheatreMode ? <PlayList playlist={videoList} onChangeVideo={handleChangeVideo} /> : null}
      </div>
      <div className="title-wrapper">
        <VideoData title={currentVideo.title} />
        {isTheatreMode ? <PlayList playlist={videoList} onChangeVideo={handleChangeVideo} /> : null}
      </div>
    </div>
  );
}

export default App;

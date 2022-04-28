import React, { useState } from 'react';
import { VideoPlayer } from './components/VideoPlayer/VideoPlayer';
import videoList from './mock/videoList.json';

function App() {
  const [currentVideo, setCurrentVideo] = useState<string>(videoList[1]);

  return (
    <div className="App">
      <VideoPlayer source={currentVideo} />
    </div>
  );
}

export default App;

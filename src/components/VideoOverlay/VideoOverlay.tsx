import React, { FC, RefObject } from 'react';
import { FullScreen } from '../../assets/icons/FullScreen';
import { TheaterMode } from '../../assets/icons/TheaterMode';

import './video-overlay.css';

interface IVideoPlayerProps {
    videoRef: RefObject<HTMLDivElement>;
    onGoFullScreen: (height: number) => void;
}

export const VideoOverlay: FC<IVideoPlayerProps> = (props): JSX.Element => {
    const {videoRef, onGoFullScreen} = props;

    const goFullScreen = () => {
        if (videoRef.current?.requestFullscreen && !document.fullscreenElement) {
            videoRef.current.requestFullscreen().then(() => onGoFullScreen(window.outerHeight));
        } else if (document.fullscreenElement) {
            document.exitFullscreen().then(() => onGoFullScreen(500));
        }
    }; 

    return (
       <div className="overlay">
            <button onClick={goFullScreen}>
                <TheaterMode />
            </button>
            <button onClick={goFullScreen}>
                <FullScreen />
            </button>
       </div> 
    )
}
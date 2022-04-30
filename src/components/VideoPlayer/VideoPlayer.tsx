import React, { FC, useRef, useState } from 'react';
import { VideoOverlay } from '../VideoOverlay/VideoOverlay';

import './video-player.css';

interface IVideoPlayerProps {
    source: string;
}

export const VideoPlayer: FC<IVideoPlayerProps> = (props): JSX.Element => {
    const {source} = props;

    const [isVisibleOverlay, setIsVisibleOverlay] = useState<boolean>(false);
    const [overlayHeight, setOverlayHeight] = useState<number>(500);

    const videoRef = useRef<HTMLDivElement>(null);

    const handleShowOverlay = (): void => setIsVisibleOverlay(true);

    const handleHideOverlay = (): void => setIsVisibleOverlay(false);

    const handleGoFullScreen = (height: number): void => setOverlayHeight(height);

    return (
        <div className='video-container' ref={videoRef} onMouseEnter={handleShowOverlay} onMouseLeave={handleHideOverlay}>
            <iframe
                width="100%"
                height={overlayHeight}
                src={source}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen />
            {isVisibleOverlay ? <VideoOverlay onGoFullScreen={handleGoFullScreen} videoRef={videoRef} /> : null}
        </div>
    )
}
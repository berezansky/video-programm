import React, { FC, IframeHTMLAttributes, useRef } from 'react';

interface IVideoPlayerProps {
    source: string;
}

export const VideoPlayer: FC<IVideoPlayerProps> = (props): JSX.Element => {
    const {source} = props;

    const videoRef = useRef<HTMLIFrameElement>(null);

    const goFullScreen = () => {
        if (videoRef.current?.requestFullscreen) {
            console.log(123);
            videoRef.current.requestFullscreen();
        }
    };
    const closeScreen = async () => {
      if (!document.exitFullscreen) {
        document.exitFullscreen();
      }
    };


    return (
        <>
            <button onClick={goFullScreen}>Go</button>
            <iframe ref={videoRef} width="560" height="315" src="https://www.youtube.com/embed/E7wJTI-1dvQ?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </>
    )
}
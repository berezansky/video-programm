import React, { FC } from 'react';

interface IVideoPlayerProps {
    source: string;
}

export const VideoOverlay: FC<IVideoPlayerProps> = (props): JSX.Element => {
    const {source} = props;

    return (
        <video src={source} />
    )
}
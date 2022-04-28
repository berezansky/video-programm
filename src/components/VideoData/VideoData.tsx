import React, { FC } from 'react';

interface IVideoPlayerProps {
    source: string;
}

export const VideoData: FC<IVideoPlayerProps> = (props): JSX.Element => {
    const {source} = props;

    return (
        <video src={source} />
    )
}
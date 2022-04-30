import React, { FC } from 'react';

interface IVideoDataProps {
    title: string;
}

export const VideoData: FC<IVideoDataProps> = (props): JSX.Element => {
    const {title} = props;

    return (
        <div>
            <p>{title}</p>
        </div>
    )
}
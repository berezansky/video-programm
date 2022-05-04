import React, { FC } from 'react';
import { IVideoList } from '../../Consts/Consts';

import './playlist.css'

interface IPlaylistProps {
    playlist: IVideoList[];
    onChangeVideo: (video: IVideoList) => () => void;
}

export const PlayList: FC<IPlaylistProps> = (props): JSX.Element => {
    const { playlist, onChangeVideo } = props;

    return (
        <div className='playlist-wrapper'>
            <ul>
                {playlist.map((el) => (
                    <li onClick={onChangeVideo(el)}>
                        <div className="video-image" />
                        <p>{el.title}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
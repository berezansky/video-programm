import React, { FC } from 'react';
import { IVideoList } from '../../Consts/Consts';

import './playlist.css'

interface IPlaylistProps {
    playlist: IVideoList[];
}

export const PlayList: FC<IPlaylistProps> = (props): JSX.Element => {
    const {playlist} = props;

    return (
        <div className='playlist-wrapper'>
            <ul>
                {playlist.map((el) => (
                    <li>
                        <div className="video-image" />
                        <a href={el.link}>{el.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}
import { Grid, Item } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import './BodyInfoStyle.css'
import RecentPlaylist from './RecentPlaylist';
export default function BodyInfo() {

    const {playlists} = useSelector(state=> state.AppState);
    console.log(playlists);
    return (
        <div className='body__container'>
            <h2>Good evening</h2>
            <RecentPlaylist playlists={playlists}></RecentPlaylist>
            <h2>Shows you might like</h2>

        </div>
    )
}

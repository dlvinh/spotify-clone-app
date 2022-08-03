import { Grid, Item } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import './BodyInfoStyle.css'
import RecentPlaylist from './RecentPlaylist';
import Shows from './Shows';
import Artists from './Artists';
export default function BodyInfo() {

    const {playlists} = useSelector(state=> state.AppState);
    return (
        <div className='body__container'>
            <h2>Good evening</h2>
            <RecentPlaylist playlists={playlists}></RecentPlaylist>
            <Shows></Shows>
         
            <Artists></Artists>
        </div>
    )
}

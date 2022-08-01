import { Grid } from '@mui/material'
import React from 'react'
import './BodyInfoStyle.css'
export default function RecentPlaylist({ playlists }) {
    return (
        <div className='recentPlaylists'>
            <Grid  className='current__playlists' container rowSpacing={2} spacing={4}>
                {
                    playlists?.slice(0, 6).map((item, index) => {
                        return <Grid className='playlist' key={index} item xs={6} lg={4}>
                            <div className='playlist__item' >
                                <img className='playlist__logo' src={item.images[0]?.url} alt='...' ></img>
                                <h4>{item.name}</h4>
                            </div>
                        </Grid>
                    })
                }
            </Grid>
        </div>
    )
}

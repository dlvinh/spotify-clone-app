import React from 'react';
import './FooterStyle.css';
import ShuffleRoundedIcon from '@mui/icons-material/ShuffleRounded';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import SkipPreviousRoundedIcon from '@mui/icons-material/SkipPreviousRounded';
import SkipNextRoundedIcon from '@mui/icons-material/SkipNextRounded';
import RepeatRoundedIcon from '@mui/icons-material/RepeatRounded';
import QueueMusicOutlinedIcon from '@mui/icons-material/QueueMusicOutlined';
import DevicesOutlinedIcon from '@mui/icons-material/DevicesOutlined';
import VolumeDownOutlinedIcon from '@mui/icons-material/VolumeDownOutlined';
import { Slider } from '@mui/material';
import Grid from '@mui/material/Grid';
export default function Footer() {
  return (
    <div className='footer'>
      <div className="footer__left">
        <img className='album_cover' alt="..." ></img>
        <div className='song__info'>
        <h4>Song name</h4>
        <p>Artist</p>
        </div>
        
      </div>
      <div className="footer__center">
        <ShuffleRoundedIcon fontSize='large' className='controller__icon'></ShuffleRoundedIcon>
        <SkipPreviousRoundedIcon fontSize='large' className='controller__icon'></SkipPreviousRoundedIcon>
        <PlayCircleOutlineOutlinedIcon fontSize='large' className='controller__icon'></PlayCircleOutlineOutlinedIcon>
        <SkipNextRoundedIcon fontSize='large' className='controller__icon'></SkipNextRoundedIcon>
        <RepeatRoundedIcon fontSize='large' className='controller__icon'></RepeatRoundedIcon>
      </div>
      <div className="footer__right">
        <Grid className='grid' alignItems="center" container spacing={2}>  
          <Grid item xs={2}>
          <QueueMusicOutlinedIcon fontSize='large' className='controller__icon'> </QueueMusicOutlinedIcon>
          </Grid>
          <Grid item xs={2}>
          <DevicesOutlinedIcon fontSize='large' className='controller__icon'> </DevicesOutlinedIcon>
          </Grid>
          <Grid item xs={2}>
          <VolumeDownOutlinedIcon fontSize='large' className='controller__icon'> </VolumeDownOutlinedIcon>
          </Grid>
          <Grid item xs={4}>
          <Slider color="success" className='volumne controller__icon' aria-label="Volume" size="small" /> 
          </Grid>
        </Grid>
        {/* <Slider color="primary" className='volumne' aria-label="Volume" size="small" /> */}
        
       
       
       
      </div>
    </div>
  )
}

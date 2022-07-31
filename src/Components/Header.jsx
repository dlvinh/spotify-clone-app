import React from 'react'
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import Avatar from './Avatar';
import "./HeaderStyle.css";
export default function Header() {
  return (
    <div className='header'>
        <div className="header__left">
            <ArrowBackIosNewRoundedIcon></ArrowBackIosNewRoundedIcon>
            <ArrowForwardIosRoundedIcon></ArrowForwardIosRoundedIcon>
        </div>
        <div className="header__right">
            <Avatar></Avatar>
        </div>  
    </div>
  )
}

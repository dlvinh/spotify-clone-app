import React, { useState } from 'react'
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import Avatar from './Avatar';
import "./HeaderStyle.css";
import Search from './Search';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
export default function Header() {
  const [showSearch, setShowSearch] = useState(true);
  const [showDelete,setShowDelete] = useState(false);
  return (
    <div className='header'>
      <div className="header__left">
        <ArrowBackIosNewRoundedIcon className='controller__icon'></ArrowBackIosNewRoundedIcon>
        <ArrowForwardIosRoundedIcon className='controller__icon'></ArrowForwardIosRoundedIcon>
        <div className='search__container' style={{ display: showSearch ? "flex" : "none" }}>
        <SearchOutlinedIcon className="search__icon" fontSize='large'></SearchOutlinedIcon>
        <input onChange={(e)=>{
            if(!showDelete){
              setShowDelete(true);
            }
            if (e.target.value === ""){
              setShowDelete(false);
            }
        }} type="text" placeholder='Artists, songs, or podcasts' />
        <ClearOutlinedIcon className='search__icon' fontSize='large' style={{ display: showDelete ? "" : "none" }}></ClearOutlinedIcon>
      </div>
      </div>
    
      <div className="header__right">
        <Avatar></Avatar>
      </div>
    </div>
  )
}

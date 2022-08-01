import React, { useState } from 'react'
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import Avatar from './Avatar';
import "./HeaderStyle.css";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';
export default function Header() {
  const dispatch= useDispatch();
  const {showSearch} = useSelector(state=> state.SidebarState);
  const [showDelete,setShowDelete] = useState(false);
  const inputRef = useRef("")
  return (
    <div className='header'>
      <div className="header__left">
        <ArrowBackIosNewRoundedIcon onClick={()=>{
          if(showSearch){
              dispatch({
                type: "HIDE_SEARCH"
              })
          }
        }} className='controller__icon'></ArrowBackIosNewRoundedIcon>
        <ArrowForwardIosRoundedIcon className='controller__icon'></ArrowForwardIosRoundedIcon>
        <div className='search__container' style={{ transform: showSearch ? "translateX(0)" : ""}}>
        <SearchOutlinedIcon className="search__icon" fontSize='large'></SearchOutlinedIcon>
        <input ref={inputRef} onChange={(e)=>{
            if(!showDelete){
              setShowDelete(true);
            }
            if (e.target.value === ""){
              setShowDelete(false);
            }
        }} type="text"  placeholder='Artists, songs, or podcasts' />
        <ClearOutlinedIcon onClick={()=>{
            inputRef.current.value = "";
            setShowDelete(false);
        }} className='search__icon' fontSize='large' style={{ display: showDelete ? "" : "none" }}></ClearOutlinedIcon>
      </div>
      </div>
    
      <div className="header__right">
        <Avatar></Avatar>
      </div>
    </div>
  )
}

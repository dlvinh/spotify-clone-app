import React from 'react'
import './AvatarStyle.css'
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';

import { useSelector } from 'react-redux';
export default function Avatar() {
  const {user}  = useSelector(state=>state.AppState);
 // console.log(user);
  return (
    <div className='profile__avatar'>
        <img className='avatar__img' alt=".." src={user.info.images[0].url}></img>
        <h4>{user.info.display_name}</h4>
        <ArrowDropDownRoundedIcon className='controller__icon' fontSize='large'></ArrowDropDownRoundedIcon>
    </div>
  )
}

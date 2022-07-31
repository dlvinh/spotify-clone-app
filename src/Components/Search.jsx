import React from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import './HeaderStyle.css'

export default function Search() {
  return (
    <div className='search__container'>
        <SearchOutlinedIcon></SearchOutlinedIcon>
        <input type="text" placeholder='Artists, songs, or podcasts' />
    </div>
  )
}

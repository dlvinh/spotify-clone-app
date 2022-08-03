import React, { useEffect } from 'react'
import SidebarOption from './SidebarOption';
import "./SidebarStyle.css";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import SensorsIcon from '@mui/icons-material/Sensors';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
export default function Sidebar({ spotify }) {
  const {playlists} = useSelector(state=>state.AppState);
  const dispatch = useDispatch();
  //console.log(playlists);
  const handleShowSearch =()=>{
      dispatch({
        type: "SHOW_SEARCH"
      })
  }

  return (
    <div className='sidebar'>
      <img src={process.env.PUBLIC_URL + '/assets/logos/Spotify_Logo_RGB_Green.png'} style={{ backgroundColor: 'inherit', paddingTop: "10px" }} width="100%" alt='...'></img>
      <SidebarOption title="Home" Icon={HomeIcon}></SidebarOption>
      <SidebarOption onHandler={handleShowSearch} title="Search" Icon={SearchIcon}></SidebarOption>
      <SidebarOption title="Radio" Icon={SensorsIcon}></SidebarOption>
      <br />
      <strong>YOUR LIBRABY</strong>
      <SidebarOption title="Made For You"></SidebarOption>
      <br />
      <strong>PLAYLIST</strong>
      {playlists?.map((item,index)=>{
          return <Link key={index} style={{textDecoration:"none"}} to={`/playlists/${item.id}`}>
          <SidebarOption playlistId={item.id} key={index} title={item.name}></SidebarOption> </Link>
      })}
    </div>
  )
}

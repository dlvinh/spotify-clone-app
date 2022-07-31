import React, { useEffect } from 'react'
import SidebarOption from './SidebarOption';
import "./SidebarStyle.css";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import SensorsIcon from '@mui/icons-material/Sensors';
import { useDispatch, useSelector } from 'react-redux';
export default function Sidebar({ spotify }) {
  const {token,info} =JSON.parse(localStorage.getItem("USER_LOGIN"));
  const {playlists} = useSelector(state=>state.AppState);
  const dispatch = useDispatch();
  //console.log(playlists);
  useEffect(()=>{
    spotify.setAccessToken(token);
    spotify.getUserPlaylists(info.id).then((playlists)=>{
      console.log({playlists});
      //playlist is an array 
      dispatch({
        type:"SAVE_PLAYLIST",
        data: playlists.items
      })
    })
  },[]);

  return (
    <div className='sidebar'>
      <img src={process.env.PUBLIC_URL + '/assets/logos/Spotify_Logo_RGB_Green.png'} style={{ backgroundColor: 'inherit', paddingTop: "10px" }} width="100%" alt='...'></img>
      <SidebarOption title="Home" Icon={HomeIcon}></SidebarOption>
      <SidebarOption title="Search" Icon={SearchIcon}></SidebarOption>
      <SidebarOption title="Radio" Icon={SensorsIcon}></SidebarOption>
      <br />
      <strong>YOUR LIBRABY</strong>
      <SidebarOption title="Made For You"></SidebarOption>
      <br />
      <strong>PLAYLIST</strong>
      {playlists?.map((item,index)=>{
          return <SidebarOption key={index} title={item.name}></SidebarOption>
      })}
    </div>
  )
}

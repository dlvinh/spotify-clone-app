import React from 'react'
import "./LoginStyle.css"
import '../../Style/GlobalStyle.css'
import Button from '@mui/material/Button';
import { loginUrl } from '../../Services/Spotify';
export default function Login() {
  return (
    <div className='login'>
        {/* Spotijy logo  */}
        <img src={process.env.PUBLIC_URL + '/assets/logos/Spotify_Logo_RGB_Green.png'} width="300px" alt='...'></img>
        {/* Spotify button */}
        <a href={loginUrl} className='btn btn-login'>Login with Spotify</a>
    </div>
  )
}

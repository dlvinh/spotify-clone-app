import { Grid } from '@mui/material';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import SpotifyWebApi from 'spotify-web-api-js';
import './BodyInfoStyle.css'
import Item from './Item';
let spotify = new SpotifyWebApi()
export default function Shows() {
  const { shows } = useSelector(state => state.AppState);
  // const _TOKEN  = JSON.parse(localStorage.getItem("USER_LOGIN")).token;
  // console.log("myshows",shows)
  return (
    <div className='shows__info' style={{ backgroundColor: "transparent" }}>
      <div className='showsInfo__header'>
        <h2>Your Podcast</h2>
        {shows?.length > 6 ? <p>See All</p> : ""}
      </div>
      <Grid className="cart__grid" container spacing={2}>
        {shows?.slice(0, 2).map((item, index) => {
          return <Grid key={index} item lg={2} className="cart">
            <Item title={item?.show?.name} image={item?.show?.images[0].url} publisher={item?.show?.publisher}></Item>
          </Grid>
        })}
      </Grid>

    </div>
  )
}

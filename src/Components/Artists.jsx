import { Grid } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import Item from './Item';
import "./ItemStyle.css";
import './BodyInfoStyle.css'
export default function Artists() {
  const { artists } = useSelector(state => state.AppState);
  // console.log("artitsCom", artists);
  // console.log("artis", artists.items);
  return (
    <div className='shows__info' style={{ backgroundColor: "transparent" }}>
      <div className='showsInfo__header'>
        <h2>Your Artists</h2>
        {artists?.items?.length > 6 ? <p>See All</p> : ""}
      </div>
      <Grid className="cart__grid" container spacing={2}>
        {artists?.items?.slice(0, 6).map((item, index) => {
          return <Grid key={index} item lg={2} className="cart">
            <Item title={item?.name} image={item?.images[0].url} publisher={item?.type}></Item>
          </Grid>
        })}
      </Grid>

    </div>
  )
}

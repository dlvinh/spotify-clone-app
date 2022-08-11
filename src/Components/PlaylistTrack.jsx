import React from 'react'
import './BodyInfoStyle.css';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import Header from './Header';
import './PlaylistTrackStyle.css'
import { useDispatch, useSelector } from 'react-redux';
import Loading from './Loading';
import _ from 'lodash';
import MusicItem from './MusicItem';
let spotify = new SpotifyWebApi();

function PlaylistTrack() {
    let param = useParams();
    const playlistId = param.playlistId;
    const TOKEN = JSON.parse(localStorage.getItem("USER_LOGIN")).token;
    const dispatch= useDispatch();
    const tracks = useSelector(state => state.TrackState.tracks);
    //console.log({ playlistId, TOKEN });
    useEffect(() => {
        spotify.setAccessToken(TOKEN);
        spotify.getPlaylist(playlistId).then((res) => {
            console.log("tracks", res);
            dispatch({
                type: "SAVE_TRACK",
                data: res
            })
        })
    }, [playlistId])
 
    return (
        <div className='body'>
            <Header></Header>
            {_.isEmpty(tracks) ? "" : 
              <div className='body__container'>
              <div className='playlist_container'>
                  <div className='playlist__header'>
                      <img className='header_logo' src={tracks?.images[0]?.url} alt='...'></img>
                      <div className='header_desc'>
                          <p>{tracks?.type}</p>
                          <h1>{tracks?.name}</h1>
                          <p>{tracks?.description}</p>
                          <div className='header_sub_desc'>
                              <p>{tracks?.owner?.display_name} &#9679; {tracks?.tracks?.items?.length} songs</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
            }
            <MusicItem tracks={tracks?.tracks?.items}></MusicItem>
        </div>
    )
}

export default PlaylistTrack
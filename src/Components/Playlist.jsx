import React from 'react'
import { useSelector } from 'react-redux';
import Body from '../Pages/Home/Body';
import Footer from './Footer';
import PlaylistTrack from './PlaylistTrack';
import Sidebar from './Sidebar';

export default function Playlist(spotify) {
    const { user } = useSelector(state => state.AppState);
    //console.log("user", user);
    return (
        <div className='landing'>
            <div className='landing__body'>
                {/* Sidebar */}
                <Sidebar spotify={spotify}></Sidebar>
                {/* Body */}
                
                <PlaylistTrack></PlaylistTrack>
            </div>
           
                <Footer></Footer>
        
            {/* Footer */}
        </div>
    )
}

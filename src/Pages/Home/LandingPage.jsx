import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from '../../Components/Footer';
import Playlist from '../../Components/Playlist';
import Sidebar from '../../Components/Sidebar';
import { getToken } from '../../Services/Spotify';
import Body from './Body';



function LandingPage({ spotify }) {

    const { user } = useSelector(state => state.AppState);
    //console.log("user", user);
    return (
        <div className='landing'>
            <div className='landing__body'>
                {/* Sidebar */}
                <Sidebar spotify={spotify}></Sidebar>
                {/* Body */}
                
                <Body spotify={spotify}></Body>
            </div>
           
                <Footer></Footer>
        
            {/* Footer */}
        </div>
    )
}

export default LandingPage
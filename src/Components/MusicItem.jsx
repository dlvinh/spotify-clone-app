import React from 'react'
import PlayCircleFilledRoundedIcon from '@mui/icons-material/PlayCircleFilledRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';

import './MusicItemStyle.css';
import moment from 'moment';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import _ from 'lodash';
export default function MusicItem({ tracks }) {
    const { scrollHeadTable, setScrollHeadTable } = useState(false);
    const convertMin = (milsec) => {
        let min = milsec / 60000
        let minPart = Math.floor(min);
        let secPart = Math.floor((min - minPart) * 60)
        if (secPart % 10 === secPart) {
            return `${minPart} : 0${secPart}`
        }
        return `${minPart} : ${secPart}`
    }
    const refScroll = useRef();
    const checkScroll = (e) => {
        let positionTop = refScroll.current.getBoundingClientRect().top;
        let tablehead = document.getElementById("musicItem__table__header_tr");
        // console.log("refSc",positionTop);

        if (positionTop <= 0) {
            tablehead.classList.add("blackHeader");
        }
        if (positionTop > 0) {
            tablehead.classList.remove("blackHeader");
        }
    }

    useEffect(() => {

        window.addEventListener('scroll', checkScroll)
        return () => {
            window.removeEventListener('scroll', checkScroll)
        }
    }, [scrollHeadTable])

    console.log("musicitem", tracks)
    return (
        <div className='musicItem__container'>
            <div className='musicItem__header'>
                <PlayCircleFilledRoundedIcon className='controller__icon' fontSize='large'></PlayCircleFilledRoundedIcon>
                <MoreHorizRoundedIcon className='controller__icon' fontSize='medium'></MoreHorizRoundedIcon>
            </div>
            <div className='musicItem__table'>
                <table >

                    <thead ref={refScroll} className='musicItem__table__header'>
                        <tr id="musicItem__table__header_tr">
                            <th>#</th>
                            <th>Title</th>
                            <th> Album</th>
                            <th>Date Added</th>
                            <th><AccessTimeRoundedIcon style={{ backgroundColor: "transparent" }}></AccessTimeRoundedIcon></th>
                        </tr>
                    </thead>



                    {tracks?.map((item, index) => {

                        return <tbody  onMouseOver={(e)=>{
                            document.getElementsByClassName('track_id_'+index)[0].innerHTML=`<i class="fa-solid fa-heart"></i>`;
                        }} onMouseOut={(e)=>{
                            document.getElementsByClassName('track_id_'+index)[0].innerHTML=  index+1
                        }} key={index}>
                            <tr>
                                <td className={`track_id_${index}`}>{index + 1}</td>
                                <td className='table__title'>
                                    <img className='musicItem__logo' src={item.track.album.images[0].url} alt="..." ></img>
                                    <div className='musicItem__desc'>
                                        <p>{item.track.name}</p>
                                        <p>{item.track.artists.map((artist, index) => {
                                            return artist.name
                                        })}</p>
                                    </div>
                                </td>
                                <td>
                                
                                    {item.track.album.name}
                                </td>
                                <td>
                                    {moment(item.added_at).format('MMM DD,YYYY')}
                                </td>
                                <td>
                                    {convertMin(item.track.duration_ms)}
                                </td>
                            </tr>

                        </tbody>
                    })}



                </table>
            </div>
        </div>
    )
}

function DetectScroll() {

}

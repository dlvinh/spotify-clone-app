import React from 'react';
import BodyInfo from '../../Components/BodyInfo';
import Header from '../../Components/Header';
import './BodyStyle.css';
export default function Body({spotify}) {
  
  return (
    <div className='body'>
        <Header></Header>
        <BodyInfo></BodyInfo>
        </div>
  )
}

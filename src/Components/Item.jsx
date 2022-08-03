import { alertTitleClasses, Grid } from '@mui/material'
import React from 'react'
import "./ItemStyle.css"
export default function Item({title, image, publisher}) {
    
    return (
        <div className="cart__item">
            <div className='cart_logo'>
                <img className={publisher === "artist"? "artist":""} src={image} alt='...' ></img>
            </div>
            <div className="cart__description">
                <h3>{title.length > 15 ? title.substring(0,15) + "...": title}</h3>
                <p>{ publisher.substring(0,10)}</p>
            </div>
        </div>
    )
}

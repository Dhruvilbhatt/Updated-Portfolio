import React from 'react'
import '../Styles/Card.css'
import campus from '../assets/UCI_campus.jpg'
function Card({ college }) {
    return (
        <div className='card-container'>
            <div className='img-container'>
                <img src={campus} className='campus-images' />
            </div>
            <div className='card'>{college}</div>
        </div>
    )
}

export default Card
import '../styles/card.scss'

import React from 'react';


const Card = props => {
    const { body, icon, title, onClick } = props

    return (
        <div className='card' onClick={onClick}>
            <div className='card-left'>{icon}</div>
            <div className='card-right'>
                <div className='card-title'>{title}</div>
                <div className='card-body'>{body}</div>
            </div>
        </div>
    );
}

export default Card;
import React from 'react'

export const Couple = ({ image, nick, bio }) => {

console.log( image, nick, bio)
    return (
    <div className="image-couple">
        <img src={ image } alt='' />
        <h3>@{ nick }</h3>
        <p>{ bio }</p>
    </div>
    )
}
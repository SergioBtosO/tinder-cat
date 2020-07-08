import React from 'react'

export const ReactionIcon = ({ name, color = '#ccc' ,onPress} ) => (
    <div className="reaction-icon" style={{ backgroundColor: color }} >
        <ion-icon name={ name } onClick={onPress}></ion-icon>
    </div>
)
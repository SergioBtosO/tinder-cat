import React from 'react'

import { Avatar } from '../../Profile/components/Avatar';

export const MatchOne = (props) => (
    <div className="matches-one">
        <Avatar username={props.username} image={props.image}/>
    </div>
)

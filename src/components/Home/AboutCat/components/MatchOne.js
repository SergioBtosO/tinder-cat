import React from 'react'

import { Avatar } from '../../Profile/components/Avatar';

export const MatchOne = ({nick,image}) => (
    <div className="matches-one">
        <Avatar nick={ nick } image= { image }/>
    </div>
)

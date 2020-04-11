import React from 'react';
import { MatchOne } from './MatchOne'
import { MATCHES } from '../../../../data/db'


export const Matches = () => {

    return (
        <div className="matches-container">
            <h2> Matches List </h2>
            <hr />
            <div className="matches-box">
                {
                    MATCHES.map( (item, key) => <MatchOne key={ key } username={ item.username } image={ item.image } /> )
                }
            </div>
        </div>
    )
}

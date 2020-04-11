import React from 'react'
import { InterestOne } from './InterestOne'
import { INTERESTS } from '../../../../data/db'

export const Interests = () => {

    return (
        <div className="interest-container">
            <h2> Interest List </h2>
            <hr />
            <div className="interests-box">
                {
                    INTERESTS.map( (item, key) => <InterestOne key={ key } name={ item.name } status={ item.status } /> )
                }
            </div>
        </div>
    )
}
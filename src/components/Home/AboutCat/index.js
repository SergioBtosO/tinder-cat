import React from 'react'
import { Interests } from './components/Interests'
import { Preferences } from './components/Preferences'

export const AboutCat = ({preferences, interests }) => {
    return (
        <div className="about-cat">
            <Preferences preferences={ preferences } />
            <Interests interestsCat={ interests } />
        </div>
    )
}
import React, {useContext} from 'react'
import { Interests } from './components/Interests'
import { Preferences } from './components/Preferences'
import { AboutContext } from '../../../contexts/AboutContext'

const showAboutPanel = {
    display: 'block'
}

const hideAboutPanel = {
    display: 'none'
}


export const AboutCat = ({preferences, interests }) => {

    const {aboutPanel} = useContext(AboutContext)

    return (
        <div className="about-cat" style ={aboutPanel ? showAboutPanel: hideAboutPanel}>
            <Preferences preferences={ preferences } />
            <Interests interestsCat={ interests } />
        </div>
    )
}
import React, { useContext } from 'react'
import { Interests } from './components/Interests'
import { Preferencias } from './components/Preferencias'
import { Matches } from './components/Matches'
import { AboutContext } from '../../../contexts/AboutContext'

const showAboutPanel = {
    display: 'block'
}

const hideAboutPanel = {
    display: 'none'
}

export const AboutCat = () => {

    const { aboutPanel } = useContext(AboutContext)

    return (
        <div style={ aboutPanel ? showAboutPanel: hideAboutPanel } className="about-cat">
            <Interests />
            <Preferencias />
            <Matches />
        </div>
    )
}
import React, { useContext } from 'react'
import { Avatar } from './components/Avatar'
import { Bio } from './components/Bio'
import { Menu } from './components/Menu'
import { ProfileContext } from '../../../contexts/ProfileContext'

const showProfilePanel = {
    display: 'block'
}

const hideProfilePanel = {
    display: 'none'
}

export const Profile = ({ image, nick, bio }) => {

    const { profilePanel } = useContext(ProfileContext)

    return (
        <div style={ profilePanel ? showProfilePanel: hideProfilePanel } className="profile">
            <Avatar nick={ nick } image= { image } />
            <Bio bio={ bio }/>
            <Menu />
        </div>
    )
}
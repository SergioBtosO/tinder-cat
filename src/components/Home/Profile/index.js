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

export const Profile = () => {

    const { profilePanel } = useContext(ProfileContext)

    return (
        <div style={ profilePanel ? showProfilePanel: hideProfilePanel } className="profile">
            <Avatar username='Copito' image='https://i.pinimg.com/564x/8a/df/cf/8adfcf0b90aef150f56374c3dda25ede.jpg' />
            <Bio />
            <Menu />
        </div>
    )
}
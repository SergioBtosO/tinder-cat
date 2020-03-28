import React from 'react'
import { Avatar } from './ProfileDetail/Avatar'
import { Bio } from './ProfileDetail/Bio'
import { Menu } from './ProfileDetail/Menu'

export const Profile = () => (
    <div className="profile">
        <Avatar nombre='Copito' foto='https://i.pinimg.com/564x/8a/df/cf/8adfcf0b90aef150f56374c3dda25ede.jpg' />
        <Bio />
        <Menu />
    </div>
)
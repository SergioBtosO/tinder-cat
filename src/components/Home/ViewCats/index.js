import React from 'react'
import { Topbar } from './components/Topbar'
import { Navigation } from './components/Navigation'
import { Reactions } from './components/Reactions'
import { CatInteractionContextStore } from './../../../contexts/CatInteractionContext'

export const ViewCats = () => (
    <CatInteractionContextStore>
    <div className="view-cats">
            <Topbar />
            <Navigation />
            <Reactions />
    </div>
    </CatInteractionContextStore>
)
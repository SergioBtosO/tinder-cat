import React, { createContext, useState } from 'react'


const initialState = null

export const CatInteractionContext = createContext(initialState)

export const CatInteractionContextStore = ({ children }) => {

    const [ catInteraction, setCatInteraction ] = useState(initialState)
    const [ nextCatInteraction, setNextCatInteraction ] = useState([])
    const [ existCatsList, setExistCatsList] = useState(false)

    return (
        <CatInteractionContext.Provider value={{ catInteraction, setCatInteraction,nextCatInteraction, setNextCatInteraction,existCatsList, setExistCatsList }}>
            { children }
        </CatInteractionContext.Provider>
    )
}
import React, { createContext, useState,useEffect } from 'react'

const initialState = null

export const CatInteractionContext = createContext(initialState)

export const CatInteractionContextStore = ({ children }) => {

    const [ catInteraction, setCatInteraction ] = useState(initialState)

    useEffect(() => {

        console.log('cat interaction (ctx) : ',catInteraction)

        return () => { }
    }, [catInteraction])

    return (
        <CatInteractionContext.Provider value={{ catInteraction, setCatInteraction }}>
            { children }
        </CatInteractionContext.Provider>
    )
}
import React, { createContext, useState, useEffect } from 'react'

const initialState = false

export const AboutContext = createContext(initialState)

export const AboutContextStore = ({ children }) => {

    const [ aboutPanel, setAboutPanel ] = useState(initialState)

    useEffect( () => {
        const handlerResize = () => {
            const showState = window.innerWidth > 768
            setAboutPanel(showState)
        }

        window.addEventListener('resize', handlerResize)
        console.log('render here')
        handlerResize()

        return () => window.removeEventListener('resize', handlerResize)
    }, [])

    return (
        <AboutContext.Provider value={{ aboutPanel, setAboutPanel }}>
            { children }
        </AboutContext.Provider>
    )
}
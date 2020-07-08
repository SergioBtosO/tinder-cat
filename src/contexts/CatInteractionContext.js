import React, { createContext, useState,useEffect } from 'react'
import { HTTP_CONSTANTS } from './../config/http-constants'
import { requestHttp } from './../config/http-server'

const initialState = null

export const CatInteractionContext = createContext(initialState)

export const CatInteractionContextStore = ({ children }) => {

    const [ catInteraction, setCatInteraction ] = useState(initialState)
    const [ catsInteraction, setCatsInteraction ] = useState([])
    
    const getCatsInteraction = async () => {
        try {
            const endpoint = HTTP_CONSTANTS.cats
            const response = await requestHttp('get', endpoint)
            const { cats } = response
            setCatsInteraction(cats)
            console.log('ctx')
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        getCatsInteraction()
        
        return () => { }
    }, [])

    return (
        <CatInteractionContext.Provider value={{ catInteraction, setCatInteraction,catsInteraction, setCatsInteraction }}>
            { children }
        </CatInteractionContext.Provider>
    )
}
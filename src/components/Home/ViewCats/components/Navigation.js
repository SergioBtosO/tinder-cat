import React, { useState, useEffect,useContext  } from 'react'
import { NavigationIcon } from './Navigation-icon'
import { Couple } from './Couple'
import { HTTP_CONSTANTS } from '../../../../config/http-constants'
import { requestHttp } from '../../../../config/http-server'
import { CatInteractionContext } from './../../../../contexts/CatInteractionContext'

export const Navigation = () => {

    const {catInteraction,setCatInteraction} = useContext(CatInteractionContext)
    const {nextCatInteraction, setNextCatInteraction} = useContext(CatInteractionContext)
    const {existCatsList,setExistCatsList} = useContext(CatInteractionContext)

    ///acá pondremos mas funciones // cat = CAT_LIST[0] no funciona tan asi
    //constructor
    const [ catList, setCatList] = useState([])
    const [ indexCat, setIndexCat ] = useState(-1)
    const [ cat, setCat ] = useState(false)

    const getCats = async () => {
        try {
            const endpoint = HTTP_CONSTANTS.cats
            const response = await requestHttp('get', endpoint)
            const { cats } = response
            
            if(cats && cats.length >0) {
            setCatList(cats)
            setIndexCat(0)
            setExistCatsList(true)
            }
        } catch (err) {
            console.error(err)
        }
    }
    
    const goBack = () => {
        let newIndex = indexCat === 0 ? catList.length - 1 : indexCat - 1
        setIndexCat(newIndex)
    }

    const goNext = () => {
        let newIndex = indexCat === catList.length - 1 ? 0 : indexCat + 1
        setIndexCat(newIndex)
    }

    useEffect(() => {
        if(nextCatInteraction)
        {
            setNextCatInteraction(false)
            if (catList && catList.length >0){
                const newListCat = catList.filter( cat => cat._id !== catInteraction._id)
                setCatList(newListCat)
                if(newListCat && newListCat.length >0)
                {
                    if( indexCat === newListCat.length)
                    {
                        setIndexCat(0)
                    }else{
                        
                        setCat(newListCat[indexCat])
                        setCatInteraction(newListCat[indexCat])
                    }
                    
                }else{
                    setCat(false)
                    setIndexCat(-1)
                    setExistCatsList(false)
                }
                
            }else{
                getCats()
            }
           
        }
        return () => { }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [nextCatInteraction])

    useEffect(() => {
        if(catList && catList.length>0)
        {
            setCat(catList[indexCat])
            setCatInteraction(catList[indexCat])
        } 
      return () => { } //saneamiento!
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [indexCat])

    useEffect(() => {
        getCats()
        return () => { }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    //renderizar
    return (
        <div className="navigation">
                    <NavigationIcon onPress={ goBack } name="arrow-undo" /> 
                    <Couple catSelect = { existCatsList ? cat : existCatsList }/> 
                    <NavigationIcon onPress={ goNext } name="arrow-redo" /> 
         </div>
        
    )
}

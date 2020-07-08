import React, { useState, useEffect,useContext  } from 'react'
import { NavigationIcon } from './Navigation-icon'
import { Couple } from './Couple'
//import { CAT_LIST } from '../../../../data/db'
import { HTTP_CONSTANTS } from '../../../../config/http-constants'
import { requestHttp } from '../../../../config/http-server'
import { CatInteractionContext } from './../../../../contexts/CatInteractionContext'

export const Navigation = () => {

    const {setCatInteraction} = useContext(CatInteractionContext)

    ///acá pondremos mas funciones // cat = CAT_LIST[0] no funciona tan asi
    //constructor
    const [ catList, setCatList] = useState([])
    const [ indexCat, setIndexCat ] = useState(-1)
    const [ cat, setCat ] = useState({ image:'https://us.123rf.com/450wm/yupiramos/yupiramos1608/yupiramos160803744/60650487-mascota-de-la-silueta-del-gato-dom%C3%A9stico-icono-ilustraci%C3%B3n-del-vector-del-icono.jpg',
    nick:'Sin resultados',
    bio:''})
    

    const getCats = async () => {
        try {
            
            const endpoint = HTTP_CONSTANTS.cats
            const response = await requestHttp('get', endpoint)
            const { cats } = response
            console.log(response)
            setCatList(cats)
            setIndexCat(0)
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

    useEffect( () => {
        getCats()
        return () => { } //saneamiento!
    }, [])

    useEffect(() => {
      
        if(catList.length >0)
        {
            setCat(catList[indexCat])
            setCatInteraction(catList[indexCat]._id)
        }
        return () => { } //saneamiento!
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [indexCat])

    //renderizar
    return (
        <div className="navigation">
                <NavigationIcon onPress={ goBack } name="arrow-undo" />
                <Couple
                    image={ cat.image }
                    nick={ cat.nick }
                    bio={ cat.bio }
                />
                <NavigationIcon onPress={ goNext } name="arrow-redo" />
         </div>
        
    )
}

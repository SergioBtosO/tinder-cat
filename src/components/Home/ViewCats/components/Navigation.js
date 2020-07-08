import React, { useState, useEffect,useContext  } from 'react'
import { NavigationIcon } from './Navigation-icon'
import { Couple } from './Couple'
//import { CAT_LIST } from '../../../../data/db'
//import { HTTP_CONSTANTS } from '../../../../config/http-constants'
//import { requestHttp } from '../../../../config/http-server'
import { CatInteractionContext } from './../../../../contexts/CatInteractionContext'

export const Navigation = () => {

    const {catsInteraction,setCatInteraction} = useContext(CatInteractionContext)

    ///acá pondremos mas funciones // cat = CAT_LIST[0] no funciona tan asi
    //constructor
    //const [ catList, setCatList] = useState([])
    const [ indexCat, setIndexCat ] = useState(0)
    const [ cat, setCat ] = useState({})
    
    const goBack = () => {
        let newIndex = indexCat === 0 ? catsInteraction.length - 1 : indexCat - 1
        setIndexCat(newIndex)
    }

    const goNext = () => {
        let newIndex = indexCat === catsInteraction.length - 1 ? 0 : indexCat + 1
        setIndexCat(newIndex)
        console.log('next: ',newIndex)
    }

    useEffect( () => {
        if(catsInteraction.length>0){
            console.log('getCats: catsInteraction',catsInteraction,indexCat,catsInteraction.length)
            goNext()
        } else{
            setIndexCat(-1) 
        }
        return () => { } //saneamiento!
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [catsInteraction])

    useEffect(() => {
        console.log('indexcat ',catsInteraction,indexCat)
        if(catsInteraction.length>0)
        {
            setCat(catsInteraction[indexCat])
            setCatInteraction(catsInteraction[indexCat]._id)
        } 
      return () => { } //saneamiento!
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [indexCat])

    //renderizar
    return (
        <div className="navigation">
                {catsInteraction.length>0 ?
                <>
                    <NavigationIcon onPress={ goBack } name="arrow-undo" />
                    <Couple
                        image={ cat.image }
                        nick={ cat.nick }
                        bio={cat.bio}
                    />
                    <NavigationIcon onPress={ goNext } name="arrow-redo" />
                </>
                    : <Couple
                        image={'https://us.123rf.com/450wm/yupiramos/yupiramos1608/yupiramos160803744/60650487-mascota-de-la-silueta-del-gato-dom%C3%A9stico-icono-ilustraci%C3%B3n-del-vector-del-icono.jpg' }
                        nick={'No_Resultados' }
                        bio={ '' }
                    />
                }
         </div>
    )
}

import React, {useContext } from 'react'
import { ReactionIcon } from './Reaction-icon'
import { CatInteractionContext } from './../../../../contexts/CatInteractionContext'
import { HTTP_CONSTANTS } from '../../../../config/http-constants'
import { requestHttp } from '../../../../config/http-server'

export const Reactions = () => {
    
    const {catInteraction} = useContext(CatInteractionContext)
    const {setNextCatInteraction} = useContext(CatInteractionContext)
    const {existCatsList} = useContext(CatInteractionContext)

    const likedCat = () => {
        try {
            const endpoint = HTTP_CONSTANTS.liked
            const data = {catLiked:{cat_id:catInteraction._id}}
            interactionCat (endpoint,data)
        } catch (err) {
            console.error(err)
        }
    }

    const unlikedCat = () => {
            const endpoint = HTTP_CONSTANTS.unliked
            const data = {catUnliked:{cat_id:catInteraction._id}}
            interactionCat (endpoint,data)        
    }

    const reloadCats = () => {
        setNextCatInteraction(true)       
}

    const interactionCat = async (endpoint,data) => {
        try {
            await requestHttp('post', endpoint,data)
            setNextCatInteraction(true)            
        } catch (err) {
            console.error(err)
        }
    }
    return (
    <div className="reactions">
        { existCatsList ? 
        <>
            <ReactionIcon name="heart-dislike" onPress={unlikedCat}/>
            <ReactionIcon color="#C800AA" name="heart" onPress={likedCat} />
        </>
        :   <ReactionIcon name="refresh" onPress={reloadCats}/>
        }
    </div>
    )
}
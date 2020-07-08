import React, {useContext } from 'react'
import { ReactionIcon } from './Reaction-icon'
import { CatInteractionContext } from './../../../../contexts/CatInteractionContext'
import { HTTP_CONSTANTS } from '../../../../config/http-constants'
import { requestHttp } from '../../../../config/http-server'

export const Reactions = () => {
    
    const {catInteraction,catsInteraction,setCatsInteraction} = useContext(CatInteractionContext)

    const likedCat = () => {
        try {
            const endpoint = HTTP_CONSTANTS.liked
            interactionCat (endpoint)
        } catch (err) {
            console.error(err)
        }
    }

    const unlikedCat = () => {
            const endpoint = HTTP_CONSTANTS.unliked
            interactionCat (endpoint)        
    }

    const interactionCat = async (endpoint) => {
        try {
            
            await requestHttp('post', endpoint,{catLiked:{cat_id:catInteraction}})
            const listCat = catsInteraction.filter (cat => cat._id !== catInteraction)            
            setCatsInteraction(listCat)
            
        } catch (err) {
            console.error(err)
        }
    }
    return (
    <div className="reactions">
        { catsInteraction.length > 0 && <>
            <ReactionIcon name="heart-dislike" onPress={unlikedCat}/>
            <ReactionIcon color="#C800AA" name="heart" onPress={likedCat} />
            </>
        }
    </div>
    )
}
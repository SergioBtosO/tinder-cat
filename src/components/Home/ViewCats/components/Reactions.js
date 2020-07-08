import React, {useContext } from 'react'
import { ReactionIcon } from './Reaction-icon'
import { CatInteractionContext } from './../../../../contexts/CatInteractionContext'
import { HTTP_CONSTANTS } from '../../../../config/http-constants'
import { requestHttp } from '../../../../config/http-server'

export const Reactions = () => {
    
    const {catInteraction} = useContext(CatInteractionContext)


    const likedCat = async () => {
        try {
            
            const endpoint = HTTP_CONSTANTS.liked
            const response = await requestHttp('post', endpoint,{catLiked:{cat_id:catInteraction}})
            console.log(response)

        } catch (err) {
            console.error(err)
        }
    }

    const unlikedCat = async () => {
        try {
            
            const endpoint = HTTP_CONSTANTS.unliked
            const response = await requestHttp('post', endpoint,{catUnliked:{cat_id:catInteraction}})
            console.log(response)
        } catch (err) {
            console.error(err)
        }
    }


    return (
    <div className="reactions">
        <ReactionIcon name="heart-dislike" onPress={unlikedCat}/>
        <ReactionIcon color="#C800AA" name="heart" onPress={likedCat} />
    </div>
    )
}
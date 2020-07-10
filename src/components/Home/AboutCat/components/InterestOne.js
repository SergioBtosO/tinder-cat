import React,{useState}  from 'react'
import { HTTP_CONSTANTS } from '../../../../config/http-constants'
import { requestHttp } from '../../../../config/http-server'
//import { CatInteractionContext } from './../../../../contexts/CatInteractionContext'

const fillStyle = {
    background: '#07ABA0',
    border: '#05635d',
    color: '#fff'
}

export const InterestOne = ({ interestId, name , status = false, modifyStatus }) => {

    //const {catsInteraction,setCatInteraction} = useContext(CatInteractionContext)

    const [statusInterest,setStatusInterest] = useState(status)

    const changeStatus = () => {
    
    updateInterests(statusInterest?'delete':'post')
    setStatusInterest(!statusInterest)

    }

    const updateInterests = async (method) => {
        try {
            const endpoint = HTTP_CONSTANTS.updateInterests
            const response = await requestHttp(method, endpoint,{interestId})
            console.log('response: ',response)
        } catch (err) {
            console.error(err)
        }
    }
    
    return(
    <div style={ statusInterest ? fillStyle: null } className="interest-one" onClick={changeStatus} >
        { name }
    </div>
    )
}
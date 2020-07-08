import React, { useEffect, useState } from 'react'
import { InterestOne } from './InterestOne'
// import { INTERESTS } from '../../../../data/db'
import { HTTP_CONSTANTS } from '../../../../config/http-constants'
import { requestHttp } from '../../../../config/http-server'

export const Interests = ({ interestsCat }) => {

    const [interestList, setInterestList] = useState([])
   // const [interestListCat, setInterestListCat] = useState(interestsCat)
    const [interestWithStatus, setInterestWithStatus] = useState([])

    const getInterestList = async () => {
        try {
            const endpoint = HTTP_CONSTANTS.interests
            const response = await requestHttp('get', endpoint)
            const { interestsList } = response
            setInterestList(interestsList)
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        getInterestList()
        return () => {}
    }, [])

    const mergeInterestList = () => {
        if(interestsCat.length > 0){
            for(let i = 0; i < interestList.length; i++ ){
                const interestItem = interestList[i]
                const found = interestsCat.find(e => e === interestItem._id)
                if (found){
                    interestItem.status = true
                }
            }
        }
       
        setInterestWithStatus([...interestList])
    }

    useEffect(() => {
        mergeInterestList()
        return () => {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [interestList, interestsCat])

    return (
        <div className="interest-container">
            <h3> Interest List </h3>
            <hr />
            <div className="interests-box">
                {
                    interestWithStatus.map( (item) => <InterestOne key={ item._id } interestId={item._id} name={ item.interest } status={ item.status } /> )
                }
            </div>
        </div>
    )
}
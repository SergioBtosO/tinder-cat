import React, {useState,useEffect} from 'react';
import { MatchOne } from './MatchOne'
//import { MATCHES } from '../../../../data/db'
import { HTTP_CONSTANTS } from './../../../../config/http-constants'
import { requestHttp } from './../../../../config/http-server'
import { NavigationIcon } from '../../ViewCats/components/Navigation-icon';


export const Matches = () => {

    const [matchesList,setMatchesList] = useState([])
    const [match,setMatch] = useState(false)
    const [indexMatch,setIndexMatch] = useState(-1)

    const getMatches = async () => {
        try {
            const endpoint = HTTP_CONSTANTS.matches
            const {matches} = await requestHttp('get', endpoint)
            setMatchesList(matches)
            setIndexMatch(0)
        } catch (err) {
            console.error('Error: ', err)
        }
    }

    const goBack = () => {
        let newIndex = indexMatch === 0 ? matchesList.length - 1 : indexMatch - 1
        setIndexMatch(newIndex)
    }

    const goNext = () => {
        let newIndex = indexMatch === matchesList.length - 1 ? 0 : indexMatch + 1
        setIndexMatch(newIndex)
    }

    useEffect(() => {
        getMatches()
        return () => {}
    }, [])

    useEffect(() => {
    
        if(matchesList && matchesList.length>0)
        {
            setMatch(matchesList[indexMatch])
        }
        return () => {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [indexMatch])

    return (
        
        <div className="matches-container">
            <h3> Matches List </h3>
            <hr />
           
            <div className="matches-box">
                <NavigationIcon onPress={ goBack } name="arrow-undo" /> 
                { matchesList && matchesList.length>0 ?<MatchOne nick={ match.nick } image={ match.image } />:<h4>No Matches!</h4>}
                <NavigationIcon onPress={ goNext } name="arrow-redo" /> 
            </div>
            
        </div>
    )
}

import axios from 'axios'
import { HTTP_CONSTANTS } from './http-constants'

const headersConfig = (bearerToken) => {
    const defaultHeaders = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${bearerToken}`
    }
    return defaultHeaders
}

export const requestHttp = async (method = 'post', endpoint, requestData = {}, params = {}) => {
    try {
        const url = HTTP_CONSTANTS.url + endpoint
        const bearerToken = sessionStorage.getItem('_TOKEN_') 
     //   if (bearerToken != null){
            const options = {
                method,
                url,
                data: requestData,
                params,
                headers: headersConfig(bearerToken)
            }
            const response = await axios(options)
            const { data } = response
            return data
     //   } else{
     //       return {
     //           status:2,
     //           error:'Token not exist'
     //       }
     //   }
        
    } catch (err) {
        throw err
    }
}
import axios from 'axios'
import { HTTP_CONSTANTS } from './http-constants'

const headersConfig = () => {
    const defaultHeaders = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
    return defaultHeaders
}

export const requestHttp = async (method = 'post', endpoint, requestData = {}) => {
    try {
        const url = HTTP_CONSTANTS.url + endpoint
        const options = {
            method,
            url,
            data: requestData,
            headers: headersConfig()
        }
        const response = await axios(options)
        const { data } = response
        return data
    } catch (err) {
        throw err
    }
}
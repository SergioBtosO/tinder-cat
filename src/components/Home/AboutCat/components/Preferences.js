import React, { useState, useEffect } from 'react'
import { PreferencesGender } from './PreferencesGender'
import { PreferencesAge } from './PreferencesAge'
import { HTTP_CONSTANTS } from './../../../../config/http-constants'
import { requestHttp } from './../../../../config/http-server'

export const Preferences = ({ preferences}) => {

    const [ preferencesUpdated, setPreferencesUpdated ] = useState(preferences)

    const prefGenderChangedHandler = (newGender) => {
        setPreferencesUpdated(prevState => ({
            ...prevState,
            gender: newGender
        }))
    }

    const prefAgesChangedHandler = (min, max) => {
        setPreferencesUpdated(prevState => ({
            ...prevState,
            age_min: min,
            age_max: max
        }))
    }

    const requestChangePreferences = async () => {
        try {
            const endpoint = HTTP_CONSTANTS.updatePreferences
            const bodyData = {
                preferences: preferencesUpdated
            }
            await requestHttp('put', endpoint, bodyData)

        } catch (err) {
            console.error('Error: ', err)
        }
    }

    useEffect(() => {
        if (JSON.stringify(preferences) !== JSON.stringify(preferencesUpdated)) {
            requestChangePreferences()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [preferencesUpdated])

    return (
        <div className="preference-container">
        <h3>Preferences</h3>
        <hr />
        <PreferencesGender notifyChange={ prefGenderChangedHandler } gender={ preferences.gender } />
        <PreferencesAge notifyChange={ prefAgesChangedHandler } ageMax={ preferences.age_max } ageMin={ preferences.age_min } />
        </div>
    )
}
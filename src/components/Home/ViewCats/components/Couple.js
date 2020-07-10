import React from 'react'

import { CAT_LIST_EMPTY } from '../../../../data/db'
export const Couple = ({ catSelect }) => {

    return (
    <div className="image-couple">
        <img src={ catSelect ? catSelect.image : CAT_LIST_EMPTY} alt='' />
        { catSelect ? <>
        <h3>@{ catSelect.nick }</h3>
        <p>{ catSelect.bio }</p>
        </>: <>
         <h3>No more cats were found</h3>
         <p>Refresh cats</p>
         </>}
    </div>
    )
}
import React from 'react'
import {
    Link
} from 'react-router-dom'
export const Menu = () => {

    const borrarSesion = () => {
        sessionStorage.removeItem('_TOKEN_')
    }
    
    return (<nav className="menu">
        <ul>
            <Link to="">
                <li>
                    <ion-icon name="logo-octocat"></ion-icon>
                    <p>Home</p>
                </li>
            </Link>
            <Link to="">
                <li>
                    <ion-icon name="heart"></ion-icon>
                    <p>Matches</p>
                </li>
            </Link>
            <Link to="">
                <li>
                    <ion-icon name="help-buoy"></ion-icon>
                    <p>Help</p>
                </li>
            </Link>
            <Link to="./login"  onClick={borrarSesion} >
                <li>
                    <ion-icon name="log-out"></ion-icon>
                    <p>Close session</p>
                </li>
            </Link>
        </ul>
    </nav>
    )
}
import React from 'react'
import Logo from '../../static/logo-login.png'
import {
    Link
} from 'react-router-dom'

export const Signup = () => (
<div className="signup">
    <form>
        <img src={Logo} alt=''/>
	    <div className="input-custom" >
            <label>Nombre</label>
            <input type="text" />
        </div> 
        <div className="input-custom">
            <label>Email</label>
            <input type="email" />
        </div> 
        <div className="input-custom">
            <label>Nick</label>
            <input type="text" />
        </div> 
        <div className="input-custom">
            <label>Password</label>
            <input type="password" />
        </div> 
        <div className="input-custom">
            <label>Sexo</label>
            <div className="input-radio">
                <label for="Macho" >
                <input id="Macho" type="radio" name="sexo" value="Macho" />
                Macho</label>
                <label for="Hembra" >
                <input id="Hembra" type="radio" name="sexo" value="Hembra"/>
                 Hembra</label>
            </div>
        </div>                            
        <Link to="./login">
            <div className="button-primary">
                <input type="button" value="Signup" />
            </div>
        </Link>                                                               
    </form>
</div>
)
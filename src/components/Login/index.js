import React from 'react'
import Logo from '../../static/logo-login.png'
import {
    Link
} from 'react-router-dom'

export const Login = () => (
    <div className="login">
        <form>
            <img src={Logo} alt=''/>
            <div className="input-custom">
                <label>Email address</label>
                <input type="email" />
            </div>
            <div className="input-custom">
                <label>Password</label>
                <input type="password" />
            </div>
            <br />
            <Link to="/">
                <div className="button-primary">
                    <input type="button" value="Login" />
                </div>
            </Link>
            <br />
            <p className="signup-link">
                ¿Not member yet?
                    <Link to="/signup">
                        Signup
                    </Link>
            </p>
        </form>
    </div>
)
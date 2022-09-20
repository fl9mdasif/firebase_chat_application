import React from 'react'
import './style.scss';

export const Login = () => {
    return (
        <div className='formContainer'>
            <div className="formWrapper">
                <span className='logo'>DevAsif Chat Application</span>
                <span className='title'>Login Now</span>
                <form>

                    <input type='email' placeholder='Your email address' />
                    <input type='password' placeholder='Password' />

                    <button>Login</button>
                </form>
                <p>Don't have an account? Register now</p>
            </div>
        </div>
    )
}

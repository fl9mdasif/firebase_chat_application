import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase.init';

export const Login = () => {
    const navigate = useNavigate()
    const [err, setErr] = useState(false);

    const handelSubmit = async (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        try {
            await signInWithEmailAndPassword(auth, email, password)
            navigate('/')

        } catch (err) {
            setErr(true)
        }
    }

    return (
        <div className='formContainer'>
            <div className="formWrapper">
                <span className='logo'>DevAsif Chat Application</span>
                <span className='title'>Login Now</span>
                <form onSubmit={handelSubmit}>

                    <input type='email' placeholder='Your email address' />
                    <input type='password' placeholder='Password' />

                    <button>Login</button>
                    {err && <span>Something went wrong</span>}
                </form>
                <p>Don't have an account? <Link to='/register'>Register now</Link></p>
            </div>
        </div>
    )
}

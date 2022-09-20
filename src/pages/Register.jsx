import React from 'react'
import './style.scss';
import addImg from '../img/addImg.png';
export const Register = () => {
    return (
        <div className='formContainer'>
            <div className="formWrapper">
                <span className='logo'>DevAsif Chat Application</span>
                <span className='title'>Register Now</span>
                <form>
                    <input type='text' placeholder='Your name' />
                    <input type='email' placeholder='Your email address' />
                    <input type='password' placeholder='Password' />
                    <input style={{ display: 'none' }} type='file' id='file' />
                    <label htmlFor='file'>
                        <img src={addImg} alt='' />
                        <span> Upload your image</span>
                    </label>
                    <button>Sign Up</button>
                </form>
                <p>Already have an account ? Login </p>
            </div>
        </div>
    )
}

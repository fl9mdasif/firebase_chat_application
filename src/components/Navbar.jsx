import { signOut } from 'firebase/auth'
import React from 'react'
import { useContext } from 'react'
import exit from '../assets/logo/exit.png'
import { AuthContext } from '../context/AuthContext'
import { auth } from '../firebase.init'

export const Navbar = () => {
    const { currentUser } = useContext(AuthContext)
    return (
        <div className='navbar'>
            <span className="logo">FastChat</span>
            <div className="user">
                <span>{currentUser.displayName}</span>
                <img src={currentUser.photoURL} alt="" />
                <button onClick={() => signOut(auth)}>
                    <img src={exit} alt="" />
                </button>
            </div>
        </div>
    )
}

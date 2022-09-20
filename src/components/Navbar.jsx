import React from 'react'
import exit from '../assets/logo/exit.png'
export const Navbar = () => {
    return (
        <div className='navbar'>
            <span className="logo">FastChat</span>
            <div className="user">
                <img src="https://images.pexels.com/photos/4879860/pexels-photo-4879860.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                <span>Asif Al Azad</span>
                <button>
                    <img src={exit} alt="" />
                </button>
            </div>
        </div>
    )
}

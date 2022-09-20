import React from 'react'
import addFile from '../assets/logo/attach.png'
import img from '../assets/logo/img.png';


export const Input = () => {
    return (
        <div className="input">
            <input type="text" placeholder="Type something..." />
            <div className="send">
                <img src={addFile} alt="" />
                <input style={{ display: 'none' }} type='file' id='file' />
                <label htmlFor='file'>
                    <img src={img} alt='' />
                    {/* <span> Upload your image</span> */}
                </label>
                <button>Send</button>
            </div>
        </div>
    )
}

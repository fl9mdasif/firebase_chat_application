import React, { useContext } from 'react'
import video from '../assets/logo/Video-Video-Call-icon.png'
import more from '../assets/logo/more.png'
import addFriend from '../assets/logo/addFriend.png'
import { Messages } from './Messages'
import { Input } from './Input'
import { ChatContext } from '../context/ChatContext'
// import ''

export const Chat = () => {

    const { data } = useContext(ChatContext);

    return (
        <div className="chat">
            <div className="chatInfo">
                <span>
                    {data.user?.displayName}
                </span>
                <div className="chatIcons">
                    <img src={video} alt="" />
                    <img src={addFriend} alt="" />
                    <img src={more} alt="" />
                </div>
            </div>
            <Messages />
            <Input />
        </div>
    )
}

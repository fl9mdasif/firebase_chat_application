import { doc, onSnapshot } from 'firebase/firestore';
import React, { useContext } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { ChatContext } from '../context/ChatContext';
import { db } from '../firebase.init';
import { Message } from './Message'

export const Messages = () => {

    const { data } = useContext(ChatContext);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const unsub = onSnapshot(doc(db, "chats", data.chatId), (doc => {
            doc.exists() && setMessages(doc.data()?.messages)
        }))

        return () => {
            unsub()
        }
    }, [data.chatId])
    console.log(messages)

    return (
        <div className="messages">

            {
                messages.map((m) => (
                    <Message message={m} key={m.id} />
                ))
            }

        </div>
    )
}

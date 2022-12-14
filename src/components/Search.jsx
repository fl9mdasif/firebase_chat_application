import { collection, doc, getDoc, getDocs, query, serverTimestamp, setDoc, updateDoc, where } from "firebase/firestore";
import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext';
import { db } from "../firebase.init";
import search from '../assets/logo/search-icon-png-21.png'

export const Search = () => {

    const [username, setUsername] = useState("");
    const [user, setUser] = useState(null);
    const [err, setErr] = useState(false);

    const { currentUser } = useContext(AuthContext);
    // console.log(currentUser)

    const handleSearch = async () => {
        const q = query(
            collection(db, "users"),
            where("displayName", "==", username)
        );

        try {
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                setUser(doc.data());
            });
        } catch (err) {
            setErr(true);
        }
    };

    // const handleKey = (e) => {
    //     e.code === "Enter" && handleSearch();
    // };

    const handleSelect = async () => {
        //check whether the group(chats in firestore) exists, if not create
        const combinedId =
            currentUser.uid > user.uid ?
                currentUser.uid + user.uid : user.uid + currentUser.uid;
        try {
            const res = await getDoc(doc(db, "chats", combinedId));

            if (!res.exists()) {
                //create a chat in chats collection
                await setDoc(doc(db, "chats", combinedId), { messages: [] });

                //create user chats
                await updateDoc(doc(db, "userChats", currentUser.uid), {
                    [combinedId + ".userInfo"]: {
                        uid: user.uid,
                        displayName: user.displayName,
                        photoURL: user.photoURL,
                    },
                    [combinedId + ".date"]: serverTimestamp(),
                });

                await updateDoc(doc(db, "userChats", user.uid), {
                    [combinedId + ".userInfo"]: {
                        uid: currentUser.uid,
                        displayName: currentUser.displayName,
                        photoURL: currentUser.photoURL,
                    },
                    [combinedId + ".date"]: serverTimestamp(),
                });
            }
        } catch (err) { }

        //create user chats
        setUser(null);
        setUsername('')

    }


    return (
        <div className="search">
            <div className="searchForm">
                <input
                    value={username}
                    // onKeyDown={handleKey}
                    onChange={e => setUsername(e.target.value)}
                    placeholder="Search name" type="text" name="text"
                />
                <span onClick={handleSearch}>
                    <img src={search} alt="" />
                </span>
            </div>
            {err && <span style={{ color: 'red' }}>Something went wrong</span>}
            {user &&
                <div onClick={handleSelect} className="userChat">
                    <img src={user.photoURL} alt="" />
                    <div className="userChatInfo">
                        <span>{user.displayName}</span>
                        {/* <p>Hello</p> */}
                    </div>
                </div>
            }
        </div>
    )
}

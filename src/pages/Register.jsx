import React, { useState } from 'react'
import addImg from '../assets/img/addImg.png';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from '../firebase.init'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from 'react-router-dom';

export const Register = () => {
    const navigate = useNavigate()
    const [err, setErr] = useState(false);

    const handelSubmit = async (e) => {

        e.preventDefault();
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password)

            const storageRef = ref(storage, displayName);

            await uploadBytesResumable(storageRef, file).then(() => {
                getDownloadURL(storageRef).then(async (downloadURL) => {
                    try {
                        //Update profile
                        await updateProfile(res.user, {
                            displayName,
                            photoURL: downloadURL,
                        });
                        //create user on firestore
                        await setDoc(doc(db, "users", res.user.uid), {
                            uid: res.user.uid,
                            displayName,
                            email,
                            photoURL: downloadURL,
                        });

                        //create empty user chats on firestore
                        await setDoc(doc(db, "userChats", res.user.uid), {});
                        navigate("/");
                    } catch (err) {
                        console.log(err);
                        setErr(true);
                        // setLoading(false);
                    }
                });
            });


        } catch (err) {
            setErr(true)
        }

    }

    return (


        <div className='formContainer'>
            <div className="formWrapper">
                <span className='logo'>DevAsif Chat Application</span>
                <span className='title'>Register Now</span>
                <form onSubmit={handelSubmit}>
                    <input type='text' placeholder='Your name' />
                    <input type='email' placeholder='Your email address' />
                    <input type='password' placeholder='Password' />
                    <input style={{ display: 'none' }} type='file' id='file' />
                    <label htmlFor='file'>
                        <img src={addImg} alt='' />
                        <span> Upload your image</span>
                    </label>
                    <button>Sign Up</button>
                    {err && <span>Something went wrong</span>}
                </form>
                <p>Already have an account? <Link to='/login'>Login now</Link></p>
                <p></p>
            </div>
        </div>
    )
}

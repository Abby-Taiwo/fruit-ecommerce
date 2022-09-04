import React, {useState, useRef} from 'react'
import {CustomButton} from '../CustomButton/customButton'
import Input from '../Input/input'
import "../SignUp/signUp.scss"
import {signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import {otherProps} from '../../utilities'
import { auth } from '../Firebase/firebase.utils';

const SignIn = () => {

    const password = useRef(null)
    const email = useRef(null)
    const [data,
        setData] = useState({})
    const provider = new GoogleAuthProvider()

    const handlePopUp = () => {
        signInWithPopup(auth, provider).then((result) => {

            const user = result.user;
            console.log(user)
            //
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;

        })
    }

    const handleSubmit = () => {
        // let input = {     [email]: password }
        setData({email, password})

        signInWithEmailAndPassword(auth, data.email, data.password).then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            alert(user)
            //
        }).catch((error) => {

            alert("dd")
        });
    }

    return (
        <section className='sign-up'>
            <div>
                <label>Email</label>
                <Input {...otherProps[0]} ref={email}/>
                <small>message</small>
            </div>
            <div>
                <label>Password</label>
                <Input {...otherProps[1]} ref={password}/>
                <small>message</small>
            </div>
            <CustomButton onClick={handleSubmit} action={"Sign in"}/>
            <small>or</small>
            <CustomButton action={"Sign in Google"} onClick={handlePopUp}/>
          
        </section>
    )
}

export default SignIn
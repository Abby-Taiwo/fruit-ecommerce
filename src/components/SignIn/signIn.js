import React, {useState, useRef} from 'react'
import {CustomButton} from '../CustomButton/customButton'
import Input from '../Input/input'
import "../SignUp/signUp.scss"
import {signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import {otherProps} from '../../utilities'
import {auth} from '../Firebase/firebase.utils';

const SignIn = () => {

    const password = useRef(null)
    const email = useRef(null)
    const [data,
        setData] = useState({})
    const provider = new GoogleAuthProvider()

    const handlePopUp = (e) => {
        e.preventDefault()
        signInWithPopup(auth, provider)
        .then(result => {

            const user = result.user;
            console(user)
          

        }).catch((error) => {

            const errorCode = error.code;

        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setData({...email, ...password})
        console.log(data)

        signInWithEmailAndPassword(auth, data.email, data.password)
        .then(userCredential => {
          
            const user = userCredential.user;
         

        }).catch((error) => {

            alert(error)
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
            <CustomButton onSubmit={e => handleSubmit(e)} action={"Sign in"}/>
            <small>or</small>
            <CustomButton action={"Sign in Google"} onSubmit={e => handlePopUp(e)}/>

        </section>
    )
}

export default SignIn
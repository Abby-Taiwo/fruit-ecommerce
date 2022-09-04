import React, {useRef, useState} from 'react'
import {CustomButton} from '../CustomButton/customButton'
import Input from '../Input/input'
import {useNavigate} from 'react-router-dom'
import "./signUp.scss"
import {otherProps} from '../../utilities'
import { auth } from '../Firebase/firebase.utils'
import {createUserWithEmailAndPassword} from "firebase/auth";

const SignUp = () => {
    const [data,
        setData] = useState({})
    const password = useRef(null)
    const email = useRef(null)
    const navigate = useNavigate()
  
    const handleSubmit = () => {
        // let input = {
        //     [email]: password
        // }
        setData({
            email,
            password
        })

        createUserWithEmailAndPassword(auth, data.email, data.password).then((userCredential) => {
            const user = userCredential.user;
            console.log(user)
        }).catch((error) => {
            alert(error)
        })
        
        navigate("")
    }

    return (
        <section className='sign-up' >
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
            <div>
                <label>Confirm Password</label>
                <Input {...otherProps[1]} ref={password}/>
                <small>message</small>
            </div>
            <CustomButton onClick={handleSubmit} action={"Sign up"}/>
            <small>or</small>
            <CustomButton action={"Sign up Google"}/>
           
        </section>
    )
}

export default SignUp
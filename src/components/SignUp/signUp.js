import React, {useRef, useState, useEffect} from 'react'
import {CustomButton} from '../CustomButton/customButton'
import Input from '../Input/input'
import {useNavigate} from 'react-router-dom'
import "./signUp.scss"
import {otherProps} from '../../utilities'
import {auth} from '../Firebase/firebase.utils'
import {createUserWithEmailAndPassword} from "firebase/auth";

const SignUp = ({setUser}) => {


    useEffect(() => {
        const fetchData = async() => {
            const resp = await fetch('http://localhost:3001/userInfo')
            const user = await resp.json()
            setUser(user)

        }

        fetchData()
    }, []);
    const password = useRef(null)
    const email = useRef(null)
    const navigate = useNavigate()

    const handleSubmitPopUp = (e) => {

        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            const user = userCredential.user;
           
        }).catch((error) => {
            alert(error)
        })
        navigate("/")
    }
    const handleSubmit = (e) => {

        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            const user = userCredential.user;
            
        }).catch((error) => {
            alert(error)
        })
        

        navigate("/")
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
            <div>
                <label>Confirm Password</label>
                <Input {...otherProps[1]} ref={password}/>
                <small>message</small>
            </div>
            <CustomButton onClick={e => handleSubmit(e)} action={"Sign up"}/>
            <small>or</small>
            <CustomButton onClick={handleSubmitPopUp} action={"Sign up Google"}/>

        </section>
    )
}

export default SignUp
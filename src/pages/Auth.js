import React, {useState} from 'react'
import SignIn from '../components/SignIn/signIn'
import SignUp from '../components/SignUp/signUp'
import {onAuthStateChanged} from "firebase/auth";
import {auth} from '../components/Firebase/firebase.utils';
const Auth = ({setUser}) => {
    const [check,
        setCheck] = useState(true)

    const toggle = () => {
        check
            ? setCheck(false)
            : setCheck(true)

    }

    

    return (
        <div
            style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            minHeight: "100vh"
        }}>
            <div
                style={{
                display: "flex",
                width: "350px",
                cursor: 'pointer',
                height: 'max-content',
                justifyContent: 'space-evenly',
                marginBottom: "10px"
            }}>

                <h1 onClick={toggle}>Sign In</h1>
                <h1 onClick={toggle}>Sign Up</h1>

            </div>
            <form
                style={{
                display: "flex",
                height: "380px"
            }}>
                {check
                    ? <SignIn/>
                    : <SignUp setUser={setUser}/>
                }
            </form>
        </div>
    )
}

export default Auth
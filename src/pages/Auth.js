import React from 'react'
import SignIn from '../components/SignIn/signIn'
import SignUp from '../components/SignUp/signUp'
import {onAuthStateChanged} from "firebase/auth";
import { auth } from '../components/Firebase/firebase.utils';
const Auth = () => {
    
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            const uid = user.uid;
            console.log(uid)
            // ...
        } else {
            // User is signed out ...
        }
    });
    return (
        <div
            style={{
            display: "flex",
            justifyContent: "center",
            alignItem: "center",
            minHeight: "100vh"
        }}>
            <form
                style={{
                display: "flex",
                height: "380px"
            }}>
                <SignIn/>
                <SignUp/>
            </form>
        </div>
    )
}

export default Auth
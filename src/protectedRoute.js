import React from 'react'
import {Navigate} from 'react-router-dom'

const ProtectedRoute = ({user,route,currUser}) => {
    
    if (!user.includes(currUser.email)) return <Navigate to="/auth"/>
    
    return route
}

export default ProtectedRoute
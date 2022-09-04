import React from 'react'
import {Link} from 'react-router-dom'

const UnAvailablePage = () => {
    return (
        <div
            style={{
            display: 'flex',
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            height: "100vh"
        }}>
            <h1>404 PAGE NOT FOUND</h1>
            <Link to="/">Back to home page</Link>
        </div>
    )
}

export default UnAvailablePage
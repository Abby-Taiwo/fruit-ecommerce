import React from 'react'
import {Link} from 'react-router-dom'
import {Payment} from '../components/Payment/payment'

const CheckOut = () => {
    return (
        <div
            style={{
            background: "lightgreen",
            height: "100vh"
        }}>
            <header
                style={{
                background: "rebeccapurple",
                height: "65px",
                display: "flex",
                justifyContent: "space-between",
                padding: "0 60px",
                alignItems: "center"
            }}>
                <Link to={"/"}>
                    <img
                        style={{
                        height: "45px"
                    }}
                        src="https://www.svgrepo.com/show/218292/fruits-fruit.svg"
                        alt="logo"/>
                </Link>
                <Link to={"/"}>
                    <img
                        style={{
                        height: "45px"
                    }}
                        src="https://www.svgrepo.com/show/218292/fruits-fruit.svg"
                        alt="logo"/>
                </Link>
            </header>
            <div
                style={{
                display: "flex",
                flexDirection: "column",
                width: "400px",
                padding: "15px",
                alignItems: "flex-start",
                margin: "0 auto"
            }}>
                <h2 style={{
                    padding: "15px"
                }}>$ 1334</h2>
                <Payment/>
            </div>
        </div>
    )
}

export default CheckOut
import React, {useState, useEffect} from 'react'
import Header from '../components/Header/header';
import CartItem from '../components/CartItem/cartitem';
import {useSelector} from 'react-redux';
import {Payment} from '../components/Payment/payment';
import { Link } from 'react-router-dom';

const Cart = () => {

    const [cart,
        setCart] = useState([])
    const cartQuantity = useSelector((state) => state.cartQuantityCounter)
    useEffect(() => {
        const fetchData = async() => {
            const resp = await fetch('http://localhost:3001/products')
            const products = await resp.json()
            setCart(products)

        }

        fetchData()
    }, [cartQuantity]);

    return (
        <div>
            <Header/>
            <main
                style={{
                display: "flex",
                heigth: "100%"
            }}>
                <div
                    style={{
                    display: "flex",
                    alignItems: "center",
                    height: "89.1vh",
                    flexDirection: "column",
                    width: "50vw",
                    background: "blue",
                    overflowY: "scroll"
                }}>
                    {cart.map(({
                        id,
                        ...otherProps
                    }) => <CartItem key={id} {...otherProps}/>)}
                </div>
                <div
                    style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexDirection: "column",
                    width: "50vw",
                    padding: "30px 15px 10px"
                }}>
                    <Payment/>
                    <Link
                        style={{
                        height: "50px",
                        textDecoration: "none",
                        width: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                        display: "flex",
                        background: "blue"
                    }}
                        to={"/checkout"}>make payment</Link>
                </div>

            </main>

        </div>
    )
}

export default Cart
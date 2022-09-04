import React, {useState, useEffect} from 'react'
import HeaderGen from '../components/HeaderGen/headergen';
import CartItem from '../components/CartItem/cartitem';
import { TAndC } from '../components/T&C/t&c';

const Cart = () => {

    const [cart,
        setCart] = useState([])

    useEffect(() => {
        const fetchData = async() => {
            const resp = await fetch('http://localhost:3001/cart')
            const products = await resp.json()
            setCart(products.products)

        }

        fetchData()
    }, []);
    return (
        <div>
            <HeaderGen/>
            <main
                style={{
                display: "flex",
                heigth: "100%",
                
            }}>
                <div
                    style={{
                    display: "flex",
                    alignItems: "center",
                    height: "89.1vh",
                    flexDirection: "column",
                    flexWrap: "wrap",
                    width: "600px",
                    background: "blue"
                }}>
                    {cart.map(({id, ...otherProps}) => <CartItem key={id} {...otherProps}/>)}
                </div>
                <TAndC />
            </main>

        </div>
    )
}

export default Cart
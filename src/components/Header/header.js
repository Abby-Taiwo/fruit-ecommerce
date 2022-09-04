import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import "./header.scss"
import addToCart from "../../assets/icons/add_to_cart.svg"
import goToCart from "../../assets/icons/shopping_cart.svg"

export const Header = () => {
    const [cart,
        setCart] = useState(0)

    useEffect(() => {
        const fetchData = async() => {
            const resp = await fetch('http://localhost:3001/cart')
            const cart = await resp.json()
            setCart(cart.products.length)

        }

        fetchData()
    }, []);

    return (
        <div className='header'>
            <img src="https://www.svgrepo.com/show/218292/fruits-fruit.svg" alt="logo"/>
            <div>FRUITO - the planet of fruits</div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/cart">
                    <img
                        src={cart > 0
                        ? goToCart
                        : addToCart}
                        alt='cart'></img>

                </Link>
                <Link to="/mm">Faqs</Link>
                <Link to="/auth" className='login'>Register</Link>
            </nav>
        </div>
    )
}

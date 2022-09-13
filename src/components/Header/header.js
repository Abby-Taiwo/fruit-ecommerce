import React, {useEffect, useMemo, useState} from 'react'
import {Link} from 'react-router-dom'
import "./header.scss"
import addToCart from "../../assets/icons/add_to_cart.svg"
import goToCart from "../../assets/icons/shopping_cart.svg"
import {useSelector} from 'react-redux'
import CartIcon from '../CartIcon/cartIcon'

const Header = () => {
    const [data,
        setData] = useState([])
    const cartQuantity = useSelector((state) => state.cartQuantityCounter.value)

    useEffect(() => {
        const ad = async() => {
            const resp = await fetch('http://localhost:3001/products')
            const products = await resp.json()
            setData(products)
        }
        ad()

    }, [cartQuantity])

    const funct = (products) => {
        let f = 0

        for (let i = 0; i < products.length; i++) {
            f += products[i].counter

        }
       
        return f
    }

    return (
        <div className='header'>
            <img src="https://www.svgrepo.com/show/218292/fruits-fruit.svg" alt="logo"/>
            <div>FRUITO - the planet of fruits</div>
            <nav>
                <Link to="/">Home</Link>
                <CartIcon addToCart={addToCart} cartQuantity={funct(data)} goToCart={goToCart}/>
                
               
            </nav>
        </div>
    )
}

export default Header

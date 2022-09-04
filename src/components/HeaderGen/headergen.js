import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import addToCart from "../../assets/icons/add_to_cart.svg"
import goToCart from "../../assets/icons/shopping_cart.svg"

const HeaderGen = () => {
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
        <header className='header'>
            
            <img src="https://www.svgrepo.com/show/218292/fruits-fruit.svg" alt="logo"/>
            <div>FRUITO - the planet of fruits</div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/cart">
                    <img
                        src={cart > 0
                        ? goToCart
                        : addToCart}
                        alt='cart'/>

                </Link>
                <Link to="/mm">Faqs</Link>
                <Link to={"/"}>
                    <img
                        style={{
                        height: "45px"
                    }}
                        src="https://www.svgrepo.com/show/218292/fruits-fruit.svg"
                        alt="logo"/>
                </Link>

            </nav>
        </header>
    )
}

export default HeaderGen
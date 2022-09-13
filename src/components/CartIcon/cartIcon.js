import React from 'react'
import {Link} from 'react-router-dom'

const CartIcon = ({cartQuantity,goToCart,addToCart}) => {
    return (
        <Link to="/cart">
            <img
                src={cartQuantity > 0
                ? goToCart
                : addToCart}
                alt='cart'/>
            <span
                style={{
                display: `${cartQuantity >= 1
                    ? "flex"
                    : "none"}`
            }}>{cartQuantity}</span>
        </Link>
    )
}

export default CartIcon
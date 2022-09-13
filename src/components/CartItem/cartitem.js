import React from 'react'
import "./cartitem.scss"
import {Link} from 'react-router-dom'

const CartItem = ({counter, price, ImageUrl, title}) => {

    return (
        <Link
            to={`/products/${title}`}
        style={{
             display: `${counter >= 1
                 ? "flex"
                 : "none"}`
         }}
            className="cartitem">

            <img src={`${ImageUrl}`} alt="product image"/>

            <div className='cartitem__text'>
                <span>{title}</span>
                <div className='cartitem__text-number'>
                    <div>{`$ ${price * counter}`}</div>
                    <label>{`x ${counter}`}</label>
                </div>
            </div>
        </Link>
    )
}

export default CartItem
import React from 'react'
import "./cartitem.scss"
import {Link} from 'react-router-dom'

const CartItem = ({quantity, price, ImgUrl, title}) => {

    return (
        <Link to={`/products/${title}`} className="cartitem">

            <img src={`${ImgUrl}`} alt="product image"/>

            <div className='cartitem__text'>
                <span>{title}</span>
                <div className='cartitem__text-number'>
                    <div>{`$ ${price}`}</div>
                    <label>{`x ${quantity}`}</label>
                </div>
            </div>
        </Link>
    )
}

export default CartItem
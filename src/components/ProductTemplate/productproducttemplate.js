import React from 'react'
import {Link} from 'react-router-dom'
import {Counter} from '../Counter/counter'
import "./producttemplate.scss"

const ProductTemplate = ({ImageUrl, price, rating, title, quantity}) => {
    return (
        <div className="product">
            <Link
                style={{
                backgroundImage: `url(${ImageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
                to={`/products/${title}`}>
                <div>
                    <h4>{title}</h4>
                    <div>
                        <span>{price}</span>
                        {/* <small>{rating}</small> */}
                    </div>
                </div>

            </Link>

            <div className='product-click'>
                <button>Add to Cart</button>
                <Counter quantity={quantity} height={40}/>
            </div>
        </div>
    )
}

export default ProductTemplate
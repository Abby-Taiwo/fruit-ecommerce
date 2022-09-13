import React, {useState, createContext} from 'react'
import {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {Counter} from '../Counter/counter'
import "./producttemplate.scss"
import {increment} from '../../Features/counter/cartQuantitySlice'

export const context = createContext()

const ProductTemplate = ({
    ImageUrl,
    price,
    id,
    counter,
    title,
    quantity
}) => {

    const [count,
        setCount] = useState(counter)
    const dispatch = useDispatch()

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
                    <label>{title}</label>
                    <div>
                        <span>{`$ ${price}`}</span>
                        {/* <small>{rating}</small> */}
                    </div>
                </div>

            </Link>

            <context.Provider
                className='product-click'
                value={{
                quantity,
                count,
                setCount,
                id,
                price,
                title,
                ImageUrl
            }}>
                <button
                    style={{
                    display: `${count < 1
                        ? "flex"
                        : "none"}`,
                    height: "45px",
                    justifyContent: "center",
                    alignItems: "center"
                }}
                    onClick={() => {
                    setCount(count + 1)  
                    
                    //DD
                    dispatch(increment())
                    
                    //DD
                    fetch(`http://localhost:3001/products/${id}`, {
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            counter: count + 1
                        })
                    })

                    //DD


                    
                
                }}>Add to Cart</button>
                <Counter height={41}/>
            </context.Provider>
        </div>
    )
}

export default ProductTemplate
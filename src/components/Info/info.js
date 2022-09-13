import React, {useState} from 'react'
import {Counter} from '../Counter/counter'
import "./info.scss"
import {increment} from '../../Features/counter/cartQuantitySlice'
import {useDispatch} from 'react-redux'

export const Info = ({
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
        <div className='info'>
            <span className='info-img'>
                <img src={ImageUrl} alt="product-pic"/>

            </span>
            <div className='info-txt'>
                <div>{title}</div>
                <section>
                    <label>{`$ ${price}`}</label>
                </section>
            </div>
            <div className='info-btn'>               
            </div>

        </div>
    )
}

import React, {useContext, useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import {increment, decrement} from '../../Features/counter/cartQuantitySlice'
import { context } from '../ProductTemplate/producttemplate'
import "./counter.scss"

export const Counter = ({
    height
}) => {

    const dispatch = useDispatch()
    const {setCount,count,quantity,id} = useContext(context)

    return (
        <span
            className='counter'
            style={{
            height: `${height}px`,
            display: `${count >= 1
                ? "flex"
                : "none"}`
        }}>
            <button
                onClick={() => {
                if (count > 0) {
                    setCount(count - 1)
                    dispatch(decrement())
                    fetch(`http://localhost:3001/products/${id}`, {
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({counter: count  -1})
                    })

                   
                    

                }
            }}>{"<"}</button>
            <small>{count}</small>
            <button
                onClick={() => {
                if (count < quantity) {
                    setCount(count + 1)
                    dispatch(increment())
                    fetch(`http://localhost:3001/products/${id}`, {
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({counter: count  +1})
                    })
                }
            }}>{">"}</button>
        </span>
    )
}

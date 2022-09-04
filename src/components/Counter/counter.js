import React, {useState} from 'react'
import "./counter.scss"

export const Counter = ({quantity, height}) => {
    const [count,
        setCount] = useState(0)

    return (
        <span className='counter' style={{
            height: `${height}px`
        }}>
            <button
                onClick={() => {
                if (count > 0) {
                    setCount(count - 1)
                }
            }}>-</button>
            <small>{count}</small>
            <button
                onClick={() => {
                if (count < quantity) {
                    setCount(count + 1)
                }
            }}>+</button>
        </span>
    )
}

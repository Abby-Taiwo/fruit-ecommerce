import React, {useState, useImperativeHandle, forwardRef} from 'react'
import "./input.scss"

const Input = ({
    borderRadiusLeft,
    borderRadiusRight,
    placeholder,
    type,
    width,
    maxlenght
}, ref) => {

    const [input,
        setInput] = useState("")

    useImperativeHandle(ref, () => input, [input])

    return (<input
        type={type}
        onChange={e => setInput(e.target.value)}
        placeholder={placeholder}
        style={{
        width: `${width}px`,
        borderTopLeftRadius: `${borderRadiusLeft}px`,
        borderBottomLeftRadius: `${borderRadiusLeft}px`,
        borderTopRightRadius: `${borderRadiusRight}px`,
        borderBottomRightRadius: `${borderRadiusRight}px`
    }}
        
        maxLength={maxlenght}
        className="input"/>)
}

export default forwardRef(Input)

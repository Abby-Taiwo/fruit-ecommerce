import React, {useState, useImperativeHandle, forwardRef} from 'react'
import "./input.scss"

const Input = ({borderRadiusLeft,borderRadiusRight,placeholder,type,width}, ref) => {

    const [input,
        setInput] = useState("")

    useImperativeHandle(React.createRef(), () => input, [input])

    return (<input
        type={type}
        placeholder={placeholder}
        style={{
        width: `${width}px`,
        borderTopLeftRadius: `${borderRadiusLeft}px`,
        borderBottomLeftRadius: `${borderRadiusLeft}px`,
        borderTopRightRadius: `${borderRadiusRight}px`,
        borderBottomRightRadius: `${borderRadiusRight}px`
    }}
        className="input"/>)
}

export default forwardRef(Input)

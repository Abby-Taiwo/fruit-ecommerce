import React,{useRef} from 'react'
import Input from '../Input/input'
import {CustomButton} from '../CustomButton/customButton'
import "./payment.scss"
import {otherProps} from '../../utilities'


export const Payment = () => {
    const cardNumber = useRef(null)
    const cardPin = useRef(null)
    const cardCCCNumber = useRef(null)
    return (
        <form className='payment'>
        
            <div>
                <label>card number</label>
                <Input
                    ref={cardNumber}
                    {...otherProps[5]}/>
                <small>message</small>
            </div>
            <div>
                <label>card number</label>
                <Input
                    ref={cardCCCNumber}
                    {...otherProps[5]}/>
                <small>message</small>
            </div>
            <div>
                <label>card pin</label>

                <Input
                    ref={cardPin}
                    {...otherProps[6]}/>
                <small>message</small>
            </div>
        </form>
    )
}

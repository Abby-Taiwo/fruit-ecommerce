import React, {useRef} from 'react'
import Input from '../Input/input'
import "./sideBar.scss"
import {otherProps} from '../../utilities'

const SideBar = () => {

    const refs = {
        productLifeSpan: {
            perishable: useRef(null),
            semiPerishable: useRef(null),
            nonPerishable: useRef(null)
        },
        price: {
            perishable: useRef(null),
            semiPerishable: useRef(null),
            nonPerishable: useRef(null)
        },
        reviews: {
            perishable: useRef(null),
            semiPerishable: useRef(null),
            nonPerishable: useRef(null)
        }

    }

    return (
        <div className='side-bar'>
            <div>
                <span>product life span</span>
                <div>
                    <Input
                        ref={refs.productLifeSpan.perishable}
                        {...otherProps[2]}/>
                    <p>Perishable</p>
                </div>
                <div>
                    <Input
                        ref={refs.productLifeSpan.semiPerishable}
                        {...otherProps[2]}/>
                    <p>Semi perishable</p>
                </div>
                <div>
                    <Input
                        ref={refs.productLifeSpan.nonPerishable}
                        {...otherProps[2]}/>
                    <p>Non perishable</p>
                </div>
            </div>

            <div>
                <span>price</span>
                <div>
                    <Input
                        ref={refs.price.perishable}
                        {...otherProps[2]}/>
                    <p>below 3</p>
                </div>
                <div>
                    <Input
                        ref={refs.price.semiPerishable}
                        {...otherProps[2]}/>
                    <p>Semi perishable</p>
                </div>
                <div>
                    <Input
                        ref={refs.price.nonPerishable}
                        {...otherProps[2]}/>
                    <p>Non perishable</p>
                </div>
                <div>
                    <Input
                        ref={refs.price}
                        {...otherProps[2]}/>
                    <p>below 3</p>
                </div>
                <div>
                    <Input
                        ref={refs.price}
                        {...otherProps[2]}/>
                    <p>below 3</p>
                </div>
            </div>

            <div>
                <span>reviews</span>
                <div>
                    <Input
                        ref={refs.reviews}
                        {...otherProps[2]}/>
                    <p>below 3</p>
                </div>
                <div>
                    <Input
                        ref={refs.reviews}
                        {...otherProps[2]}/>
                    <p>below 3</p>
                </div>
                <div>
                    <Input
                        ref={refs.reviews}
                        {...otherProps[2]}/>
                    <p>Semi perishable</p>
                </div>
                <div>
                    <Input
                        ref={refs.reviews}
                        {...otherProps[2]}/>
                    <p>Non perishable</p>
                </div>
            </div>
        </div>
    )
}

export default SideBar;
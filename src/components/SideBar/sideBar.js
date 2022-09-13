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
                    <input type="checkbox"/>

                    <p>Perishable</p>
                </div>
                <div>
                    <input type="checkbox"/>
                    <p>Semi perishable</p>
                </div>
                <div>
                    <input type="checkbox"/>
                    <p>Non perishable</p>
                </div>
            </div>

            <div>
                <span>price</span>
                <div>
                    <input type="checkbox"/>
                    <p>below 3</p>
                </div>
                <div>
                    <input type="checkbox"/>
                    <p>Semi perishable</p>
                </div>
                <div>
                    <input type="checkbox"/>
                    <p>Non perishable</p>
                </div>
                <div>
                    <input type="checkbox"/>
                    <p>below 3</p>
                </div>
                <div>
                    <input type="checkbox"/>
                    <p>below 3</p>
                </div>
            </div>

            <div>
                <span>reviews</span>
                <div>
                    <input type="checkbox"/>
                    <p>below 3</p>
                </div>
                <div>
                    <input type="checkbox"/>
                    <p>below 3</p>
                </div>
                <div>
                    <input type="checkbox"/>
                    <p>Semi perishable</p>
                </div>
                <div>
                    <input type="checkbox"/>
                    <p>Non perishable</p>
                </div>
            </div>
        </div>
    )
}

export default SideBar;
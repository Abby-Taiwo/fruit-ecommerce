import React from 'react'
import {Link} from 'react-router-dom'
import "./description.scss"

export const Description = () => {
    return (
        <div className='description'>
            <article>
                <label>About</label>
                <p>
                    lore// jest-dom adds custom jest matchers for asserting on DOM nodes. // allows
                    you / expect(element).toHaveTextContent(/react/i) // learn
                    more: https://github.com/testing-library/jest-dom import
                    '@testing-library/jest-dom'lore// jest-dom adds custom jest matchers for
                    asserting on DOM nodes. // allows you to do things like:;</p>
            </article>
            <article>
                <label>Reviews</label>
                <span>
                    <div>
                        <img alt='user' src={""}/>
                        <div>
                            <p>lore// jest-dom adds custom jest matchers for asserting on DOM nodes. //
                                allows you </p>
                            <div>4.5</div>
                        </div>
                    </div>
                    <div>
                        <img alt='user' src={""}/>
                        <div>
                            <p>lore// jest-dom adds custom jest matchers for asserting on DOM nodes. //
                                allows you </p>
                            <div>4.5</div>
                        </div>
                    </div>
                    <div>
                        <img alt='user' src={""}/>
                        <div>
                            <p>lore// jest-dom adds custom jest matchers for asserting on DOM nodes. //
                                allows you </p>
                            <div>4.5</div>
                        </div>
                    </div>
                </span>
            </article>
            <Link to={"/cart"}>proceed to cart</Link>
        </div>
    )
}

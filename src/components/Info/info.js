import React from 'react'
import { Counter } from '../Counter/counter'
import "./info.scss"

export const Info = () => {
    return (
        <div className='info'>
            <span className='info-img'>
                <img
                    src={"https://www.svgrepo.com/show/218292/fruits-fruit.svg"}
                    alt="product-image"/>

            </span>
            <div className='info-txt'>
                <label>https://ww w.svgrepo.com/show/2 18292/fruit s-fruit.svg
                </label>
                <section>
                    <label>$ 34</label>
                </section>
            </div>
            <div style={{width: "100%"}}>
              <button>Add to cart</button>
            <Counter height={50}/>
            </div>
            
        </div>
    )
}

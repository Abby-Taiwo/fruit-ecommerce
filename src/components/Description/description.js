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
                    '@testing-library/jest-dom'lore//</p>
            </article>
            <article>
                <label>Reviews</label>
                <span>
                    <div>
                        <img alt='user' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYzDV9oMHp7mVm2XIKVfgIoVBUrIcNnBgzgw&usqp=CAU"/>
                        <div>
                            <p>love this product </p>
                            <div><img alt="" src={"https://camo.githubusercontent.com/e0a63b7f676cc1f2b85181b8bdf56a17fe2e9612e739d836d7b8df400bbd51c2/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f313931383438312f3131313638392f35383864613535382d366166662d313165322d386331332d3363323661386161313136652e706e67"}/>4.5</div>
                        </div>
                    </div>
                    <div>
                        <img alt='user' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDd_LFpavoNIrdaDqPVDfPu_mcEF6CEoW6qQ&usqp=CAU"/>
                        <div>
                            <p>it arrived fresh, plus quick response</p>
                            <div><img alt="" src={"https://camo.githubusercontent.com/e0a63b7f676cc1f2b85181b8bdf56a17fe2e9612e739d836d7b8df400bbd51c2/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f313931383438312f3131313638392f35383864613535382d366166662d313165322d386331332d3363323661386161313136652e706e67"}/>4.5</div>
                        </div>
                    </div>
                    <div>
                        <img alt='user' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ55_7obq5FWIlu9qegpQ16LgR1zFtcvX1Egw&usqp=CAU"/>
                        <div>
                            <p>best store ever </p>
                            <div><img alt="" src={"https://camo.githubusercontent.com/e0a63b7f676cc1f2b85181b8bdf56a17fe2e9612e739d836d7b8df400bbd51c2/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f313931383438312f3131313638392f35383864613535382d366166662d313165322d386331332d3363323661386161313136652e706e67"}/>4.5</div>
                        </div>
                    </div>

                    <div>
                        <img alt='user' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoq0f1tSU2b8opZaApGh5tl2FreFb52dyo6Q&usqp=CAU"/>
                        <div>
                            <p>the most healthy fruit ever</p>
                            <div><img alt="" src={"https://camo.githubusercontent.com/e0a63b7f676cc1f2b85181b8bdf56a17fe2e9612e739d836d7b8df400bbd51c2/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f313931383438312f3131313638392f35383864613535382d366166662d313165322d386331332d3363323661386161313136652e706e67"}/>4.5</div>
                        </div>
                    </div>
                </span>
            </article>
            <Link to={"/cart"}>proceed to cart</Link>
        </div>
    )
}

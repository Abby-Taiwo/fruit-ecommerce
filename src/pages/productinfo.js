import React from 'react'
import {Info} from '../components/Info/info'
import {Description} from '../components/decription/description'
import HeaderGen from '../components/HeaderGen/headergen'

const ProductInfo = () => {
    return (
        <main>
            <HeaderGen/>
            <div style={{display: "flex",width: "100%"}}>
                <Info/>
                <Description/>
            </div>

        </main>
    )
}

export default ProductInfo
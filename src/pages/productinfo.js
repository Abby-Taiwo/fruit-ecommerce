import React, {useState, useEffect} from 'react'
import {Info} from '../components/Info/info'
import {Description} from '../components/Description/description'
import Header from '../components/Header/header'
import {useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'

const ProductInfo = () => {
    const [product,
        setProduct] = useState([])
    

    useEffect(() => {
        const fetchData = async() => {
            const resp = await fetch('http://localhost:3001/products')
            const products = await resp.json()
            setProduct(products)

        }

        fetchData()
    });
    const {productid} = useParams()
    const productInfo = product.find((product) => product.title === productid)

    
    return (
        <main>
            <Header/>
            <div
                style={{
                display: "flex",
                width: "100%"
            }}>
                <Info {...productInfo}/>
                <Description/>
            </div>

        </main>
    )
}

export default ProductInfo
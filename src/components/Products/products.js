import React, {useState, useEffect, useRef} from 'react'
import {otherProps} from '../../utilities';
import Input from '../Input/input';
import Product from '../ProductTemplate/productproducttemplate';
import "./products.scss"

const Products = () => {

    const [products,
        setProducts] = useState([])
    const search = useRef()

    useEffect(() => {
        const fetchData = async() => {
            const resp = await fetch('http://localhost:3001/products')
            const products = await resp.json()
            setProducts(products)
        }

        fetchData()
       
    }, []);

    return (
        <section className="products">
            <div className='products-query'>
                <Input {...otherProps[4]} ref={search} className='products-query__input'/>
                <button className='products-query__btn'>
                    <img src='https://www.svgrepo.com/show/14071/search.svg' alt='search button'/>
                </button>
            </div>
            <div className='products-result'>
                {products.map(({
                    id,
                    ...otherProps
                }) => <Product {...otherProps} key={id}/>)}
            </div>
        </section>
    )
}

export default Products
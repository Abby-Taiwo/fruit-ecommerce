import React, {useState, useEffect, useRef} from 'react'
import {otherProps} from '../../utilities';
import Input from '../Input/input';
import Product from '../ProductTemplate/producttemplate';
import "./products.scss"

const Products = () => {

    const [products,
        setProducts] = useState([])
    const search = useRef(null)

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
                <input type="search" ref={search} placeholder="Search products here..." className='products-query__input'/>
                <button
                    className='products-query__btn'
                    onClick={() => {
                    if (search.current !== "") {
                        const filteredItem = products.filter((product) => product.title.toLowerCase().includes(`${search.current.toLowerCase()}`))
                        setProducts(filteredItem)
                    }
                }}>
                    <img src='https://www.svgrepo.com/show/14071/search.svg' alt='search button'/>
                </button>
            </div>
            <div className='products-result'>
                {products.map(({
                    id,
                    ...otherProps
                }) => <Product {...otherProps} id={id} key={id}/>)}
            </div>
        </section>
    )
}

export default Products
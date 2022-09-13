import React from 'react'
import Header from '../components/Header/header'
import Products from '../components/Products/products'

const Home = () => {
    return (
        <div>
            <Header/>
            <main style={{display: "flex"}}>
                <Products/>
            </main>

        </div>
    )
}

export default Home
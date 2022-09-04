import React from 'react'
import {Header} from '../components/Header/header'
import Products from '../components/Products/products'
import SideBar from '../components/SideBar/sideBar'

const Home = () => {
    return (
        <div>
            <Header/>
            <main style={{display: "flex"}}>
                <SideBar/>
                <Products/>
            </main>

        </div>
    )
}

export default Home
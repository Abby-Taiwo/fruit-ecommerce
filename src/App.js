import React from "react"
import {Route, Routes} from 'react-router-dom';
import Cart from './pages/cart';
import Home from './pages/home';
import UnAvailablePage from './pages/unavailablePage';
import ProductInfo from './pages/productinfo';


function App() {


    return (
        <div>
            <Routes>
                <Route exact element={< Home />} path="/"></Route>
                <Route element={< ProductInfo />} path="/products/:productid"></Route>

                <Route element={< Cart />} path="/cart"></Route>
                <Route element={< UnAvailablePage />} path="*"></Route>
            </Routes>
        </div>
    );
}

export default App;

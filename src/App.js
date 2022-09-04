import {Route, Routes} from 'react-router-dom';
import Auth from './pages/Auth';
import Cart from './pages/cart';
import CheckOut from './pages/checkout';
import Home from './pages/home';
import UnAvailablePage from './pages/unavailablePage';
import ProductInfo from './pages/productinfo';

function App() {
    return (
        <div>
            <Routes>
                <Route exact element={<Home/>} path="/"></Route>
                <Route element={<CheckOut/>} path="/checkout"></Route>
                <Route element={<ProductInfo />} path="/products/:productid"></Route>
                <Route element={<Auth/>} path="/auth"></Route>
                <Route element={<Cart/>} path="/cart"></Route>
                <Route element={<UnAvailablePage/>} path="*"></Route>
            </Routes>
        </div>
    );
}

export default App;

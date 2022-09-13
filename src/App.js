import { useEffect,useState} from "react"
import {Route, Routes} from 'react-router-dom';
import Auth from './pages/Auth';
import Cart from './pages/cart';
import Home from './pages/home';
import UnAvailablePage from './pages/unavailablePage';
import ProductInfo from './pages/productinfo';
import ProtectedRoute from './protectedRoute';

function App() {
const currUser = ""
    const [users,
        setUser] = useState([])


    return (
        <div>
            <Routes>
                <Route exact element={<Home/>} path="/"></Route>
                <Route element={<ProductInfo />} path="/products/:productid"></Route>
                <Route element={<Auth setUser={setUser}/>} path="/auth"></Route>
                
                <Route element={<Cart/>}
                // <ProtectedRoute user={users} currUser={currUser}>
                                // </ProtectedRoute>
                       path="/cart">
                </Route>
                <Route element={<UnAvailablePage/>} path="*"></Route>
            </Routes>
        </div>
    );
}

export default App;

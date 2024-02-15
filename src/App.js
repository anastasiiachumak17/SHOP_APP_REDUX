import s from './App.module.scss';
import {Link, Route, Routes} from "react-router-dom";
import Shop from "./Components/Shop/Shop";
import ShoppingCart from "./Components/ShoppingCart/ShoppingCart";
import {useSelector} from "react-redux";
import icon from './assets/Cart_sign.png';

function App() {
    let productsInCart = useSelector(state => state.shoppingCart.productsInCart);
    return (
        <div className={s.App}>
            <header>
                <Link to='/'>Shop</Link>
                <Link to='/shoppingCart'>Shopping Cart </Link>
                <div className={s.cartIcon}>
                        <img src={icon} alt="Cart" />
                        <span>{productsInCart.length}</span>
                </div>
            </header>
            <Routes>
                <Route path='/*' element={<Shop/>}/>
                <Route path='/shoppingCart' element={<ShoppingCart/>}/>
            </Routes>
        </div>
    );
}

export default App;

import Products from "./Products/Products";
import s from './Shop.module.scss';
import { Link, Route, Routes } from "react-router-dom";
import ProductInfo from "./Products/ProductInfo/ProductInfo";

const Shop = () => {

    return (
        <div className={s.Shop}>
            <nav className={s.nav}>
                <h3>Categories: </h3>
                <Link to='/electronics'>Electronics</Link>
                <Link to='/jewelery'>Jewelery</Link>
                <Link to="/men's clothing">Men's clothing</Link>
                <Link to="/women's clothing">Women's clothing</Link>

            </nav>
            <div className={s.ShopProducts}>
                <Routes>
                    <Route path='/*' element={<Products/>}/>
                    <Route path='/:category' element={<Products/>}/>
                    <Route path='/products/:productId' element={<ProductInfo/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default Shop;

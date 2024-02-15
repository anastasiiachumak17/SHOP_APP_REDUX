import s from './ProductInCart.module.scss';
import {useDispatch} from "react-redux";
import {removeProductFromCart, setCount} from "../../../data/reducers/shoppingCartReducer";
const ProductInCart = ({productInCart}) => {
    let dispatch = useDispatch();
    const DropHandler = () => {
        dispatch(removeProductFromCart(productInCart));
    }
    const OnChangeHandler = () => {
        dispatch(setCount(productInCart));
    }

    return (
        <div className={s.ProductInCart}>
            <img src={productInCart.image} alt={productInCart.title}/>
            <div>
                <h2>{productInCart.title}</h2>
                <p>{productInCart.price} $</p>
                <input type="number" onChange={OnChangeHandler} value={productInCart.counter}/>
                <button onClick={DropHandler}>Remove item</button>
            </div>
        </div>
    )
}

export default ProductInCart;
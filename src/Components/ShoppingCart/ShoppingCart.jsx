import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submitOrder } from '../../data/reducers/shoppingCartReducer'; // Замініть на шлях до вашого файлу Redux slice
import s from './ShoppingCart.module.scss';
import ProductInCart from './ProductInCart/ProductInCart';

const ShoppingCart = () => {
    const dispatch = useDispatch();
    const productsInCart = useSelector(state => state.shoppingCart.productsInCart);
    const totalQuantity = useSelector(state => state.shoppingCart.totalQuantity);

    const [comment, setComment] = useState('');

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const handleOrderSubmit = () => {
        dispatch(submitOrder({
            productsInCart: productsInCart,
            reviewForOrder: comment
        }));
    };

    return (
        <div className={s.ShoppingCartNew}>
            <div className={s.container}>
                <div className={s.inputs}>
                    <h3>Name:</h3>
                    <input type="text" placeholder='enter name' />
                    <h3>Email:</h3>
                    <input type="text" placeholder='enter e-mail' />
                    <h3>Phone:</h3>
                    <input type="text" placeholder='enter phone number' />
                    <h3>Address:</h3>
                    <input type="text" placeholder='enter address' />
                </div>
                <div className={s.products}>
                    {productsInCart.map(productInCart => <ProductInCart productInCart={productInCart} key={productInCart.id} />)}
                </div>
            </div>
            <div className={s.order}>
                <h3>Comment:</h3>
                <textarea
                    value={comment}
                    onChange={handleCommentChange}
                    placeholder='enter your comment'
                    className={s.textarea}
                />
                <div className={s.totalPrice}>
                    <h2>Total Price: {productsInCart.reduce((acc, productInCart) => acc + (productInCart.price * productInCart.counter), 0).toFixed(2)}</h2>
                    <h3>Total Quantity: {totalQuantity}</h3>
                        <div/>
                    <button onClick={handleOrderSubmit}>Submit</button>
                </div>
            </div>
        </div>
    );
}

export default ShoppingCart;

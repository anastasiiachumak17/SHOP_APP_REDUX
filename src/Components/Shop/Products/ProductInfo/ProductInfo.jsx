import s from './ProductCart.module.scss';
import {useEffect, useState} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {setProduct, toggleIsFetching} from "../../../../data/reducers/shoppingInfoReducer";
import {useParams} from "react-router-dom";
import Preloader from "../../../Preloader/Preloader";

const ProductInfo = () => {
    let dispatch = useDispatch();
    let product = useSelector(state => state.shoppingInfo.product);
    let isFetching = useSelector(state => state.shoppingInfo.isFetching);
    let {productId} = useParams();

    useEffect(() => {
        dispatch(toggleIsFetching(true))
        axios.get(`https://fakestoreapi.com/products/${productId}`)
            .then(response => {
                dispatch(toggleIsFetching(false));
                dispatch(setProduct(response.data))
            })
    }, []);

    return (
        <div className={s.ProductCart}>
            {
                isFetching ? <Preloader/> : <>
                <img src={product.image} alt={product.title}/>
                <div className={s.description}>
                <h2>{product.title}</h2>
                <h3>Price: {product.price}$</h3>
                <p>{product.description}</p>
                </div>
                </>
            }

        </div>
    )
}

export default ProductInfo;
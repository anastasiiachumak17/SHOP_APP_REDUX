import ProductCard from "./ProductCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { setProducts, toggleIsFetching } from "../../../data/reducers/shopReducer";
import { useEffect, useState } from "react";
import axios from "axios";
import s from './Products.module.scss';
import Preloader from "../../Preloader/Preloader";
import { useParams } from "react-router-dom";

const Products = () => {
    const [sort, setSort] = useState("asc");
    const products = useSelector(state => state.shop.products);
    const dispatch = useDispatch();
    const isFetching = useSelector(state => state.shop.isFetching);
    let { category } = useParams();
    category = category ? `/category/${category}` : '';

    useEffect(() => {
        dispatch(toggleIsFetching(true));
        axios.get(`https://fakestoreapi.com/products${category}`)
            .then(response => {
                dispatch(toggleIsFetching(false));
                dispatch(setProducts(response.data));
            })
    }, [category]);

    const sortProducts = (sort) => {
        setSort(sort);
        const sortedProducts = [...products].sort((a, b) => {
            if (sort === "asc") {
                return a.price - b.price;
            } else {
                return b.price - a.price;
            }
        });
        dispatch(setProducts(sortedProducts));
    };

    return (
        <div className={s.sortButtons}>
            <span onClick={() => sortProducts("asc")}>Sort by Price Ascending ↑</span>
            <span onClick={() => sortProducts("desc")}>Sort by Price Descending ↓</span>

        <div className={s.Products}>
            {
                isFetching ? <Preloader/> : products.map(product => <ProductCard product={product} key={product.id}/>)
            }
        </div>
        </div>
    )


}

export default Products;

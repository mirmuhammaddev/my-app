import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {increment, decrement, incrementByAmount} from "./productSlice";

const ProductState = () => {
    const count = useSelector((state => state.product.count));
    const dispatch = useDispatch();

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => dispatch(increment(1))}>+</button>
            <button onClick={() => dispatch(decrement(1))}>-</button>
            <button onClick={() => dispatch(incrementByAmount(5))}>increment by 5</button>
        </div>
    );
};

export default ProductState;
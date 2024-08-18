import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import './Delivery.style.css'
import ingredients from '../../assets/photos/ingredients.png'
import packaging from '../../assets/photos/packaging.png'
import receiving_an_order from '../../assets/photos/receiving_an_order.png'
import delivery from '../../assets/photos/delivery.png'

const Delivery = () => {
    const products = useSelector(state => state.product.products);
    const loading = useSelector(state => state.product.isLoading);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type:"products/getProductsFetch"})
    }, [dispatch]);

    return (
        <div className="title_of_delivery">
            <h1>Мы обо всём позаботились</h1>
            <div className='delivery_card'>
                {loading && "loading..."}
                {!loading && products.map(product =>
                    <div key={product.id} className="text_delivery">
                        <div className="photo">
                            <img src={product.image} alt="product.name"/>
                        </div>
                        <div className="text">
                            <h2>{product.title}</h2>
                            <p>{product.description}</p>
                        </div>
                    </div>
                )}
            {/*<div className="delivery_card">
            <div className='info_delivery'>
                <img src={ingredients} alt="ingredients"/>
                <h3>Лучшие ингрединты</h3>
                <p>Что-то про суперкачество, лучших поваров, свежесть и т.д.</p>
            </div>

            <div className='info_delivery'>
                <img src={packaging} alt="packaging"/>
                <h3>Упаковка</h3>
                <p>Что-то про суперкоробочки и бантики и бла бла бла</p>
            </div>

            <div className='info_delivery'>
                <img src={receiving_an_order} alt="receiving_an_order"/>
                <h3>Получение в день заказа</h3>
                <p>В день заказа доставка курьером или самовывоз</p>
            </div>

            <div className='info_delivery'>
                <img src={delivery} alt="delivery"/>
                <h3>Анонимная доставка</h3>
                <p>Можем преподнести Ваш заказ как анонимный подарок</p>
            </div>
            </div>*/}
        </div>
        </div>
    );
};

export default Delivery;
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import './news.style.css'
import major_holiday from '../../assets/photos/major_holiday.png'
import competition_in_23 from '../../assets/photos/competition_in_23.png'
import express_competition from '../../assets/photos/express_competition.png'
import {type} from "@testing-library/user-event/dist/type";

const News = () => {
    const products = useSelector(state => state.product.products);
    const loading = useSelector(state => state.product.isLoading);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: "products/getProductsFetch"})
    }, [dispatch]);

    return (
        <div className='news'>
            <h1>Новости</h1>
            <div className="news_cards">
                {loading && "loading..."}
                {!loading && products.map(product =>
                    <div key={product.id} className="each-card">
                        <div className="photo">
                            <img src={product.image} alt="product.name"/>
                        </div>
                        <div className="text">
                            <span>Price: {product.price}$</span>
                            <h3>{product.title}</h3>
                            <p>{product.description}</p>
                        </div>
                    </div>
                )}
            </div>
        {/*<div className='news_cards'>
            <div className='each-card'>
                <img src={major_holiday} alt="major_holiday"/>
                <div className='text'>
                    <span>25.02.2023</span>
                    <h3>Скоро главный праздник весны!</h3>
                    <p>Девушки любят, когда вкусно, красиво и натурально. Смотрите больше наборов с десертами ручной работы</p>
                </div>

            </div>

            <div className='each-card'>
                <img src={competition_in_23} alt="competition_in_23"/>
                <div className='text'>
                    <span>17.02.2023</span>
                    <h3>Конкурс на 23 февраля!</h3>
                    <p>День Защитника Отечества уже совсем скоро! Порадуйте своего сладкоежку с помощью аппетитных наборов от МакаронШоп</p>
                </div>

            </div>

            <div className='each-card'>
                <img src={express_competition} alt="express_competition"/>
                <div className='text'>
                    <span>11.02.2023</span>
                    <h3>Экспресс-конкурс ко дню Святого Валентина</h3>
                    <p>Подарок уже через 2 дняДень всех влюблённых не за горами. Расскажи о своих чувствах с помощью сладкой валентинки от МакаронШоп</p>
                </div>

            </div>
        </div>*/}


        </div>
    );
};

export default News;
import React,{useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import "./Some_gifts.style.css"
import macarons_3 from "../../../assets/icons/3_macarons.svg"
import macarons_9 from "../../../assets/icons/9_macarons.svg"
import round_set from "../../../assets/icons/round_set.svg"
import set_for_70 from "../../../assets/icons/sets_for_70.svg"

const SomeGifts = () => {
    const products = useSelector(state => state.product.products);
    const loading = useSelector(state => state.product.isLoading);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: "products/getProductsFetch"})
    }, [dispatch]);

    return (
        <div className="some_gifts">
            <h1>Некоторые варианты подарков</h1>
            <div className="some_gifts_cards">
                {loading && "loading..."}
                {!loading && products.map(product =>
                    <div key={product.id} className="each_card">
                        <div className="photo_gifts">
                            <img src={product.image} alt="product.name"/>
                        </div>
                        <div className="text">
                            <h3>{products.title}</h3>
                            <p>{product.description}</p>
                        </div>
                        <div className="price_button">
                            <p>от {product.price} руб/шт</p>
                        </div>
                    </div>
                )}
                {/*<div className="each_card">
                    <img src={macarons_3} alt="macarons_3"/>
                    <div className="text">
                        <h3>3 макарона с печатью</h3>
                        <p>В пластиковой упаковке самый бюджетный вариант</p>
                    </div>
                    <div className="price_button">
                        <button>от 150 руб/шт</button>
                    </div>
                </div>

                <div className="each_card">
                    <img src={macarons_9} alt="macarons_9"/>
                    <div className="text">
                        <h3>9 макарон с печатью</h3>
                        <p>С логотипом Вашей копании, пожеланиями и т.д.</p>
                    </div>
                    <div className="price_button">
                        <button>от 500 руб</button>
                    </div>
                </div>

                <div className="each_card">
                    <img src={round_set} alt="round_set"/>
                    <div className="text">
                        <h3>Круглый набор, 40 шт.</h3>
                        <p>Для самых любимых и дорогих клиентов</p>
                    </div>
                    <div className="price_button">
                        <button>от 3600 руб</button>
                    </div>
                </div>

                <div className="each_card">
                    <img src={set_for_70} alt="set_for_70"/>
                    <div className="text">
                        <h3>Набор на 70 шт.</h3>
                        <p>Роскошный подарок для большой компании</p>
                    </div>
                    <div className="price_button">
                        <button>от 5600 руб</button>
                    </div>
                </div>*/}
            </div>

            <div className="button">
                <button>Получить КП</button>
            </div>
        </div>
    );
};

export default SomeGifts;
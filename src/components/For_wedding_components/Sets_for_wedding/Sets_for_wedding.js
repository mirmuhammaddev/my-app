import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {postAdded} from "../../productSlice";
import './Sets_for_wedding.style.css'
import sets_1 from "../../../assets/photos/sets_1.png"
import sets_2 from "../../../assets/photos/sets_2.png"
import sets_3 from "../../../assets/photos/sets_3.png"
import sets_4 from "../../../assets/photos/sets_4.png"
import sets_5 from "../../../assets/photos/sets_5.png"
import sets_6 from "../../../assets/photos/sets_6.png"
import basket from "../../../assets/icons/basket.svg"

const SetsForWedding = () => {
    const products = useSelector(state => state.product.products);
    const loading = useSelector(state => state.product.isLoading);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: "products/getProductsFetch"})
    }, [dispatch]);

    return (
        <div className="sets_for_wedding">
            <h1>Наборы для свадьбы</h1>
            <div className="sets_cards">
                {loading && "Loading..."}
                {!loading && products?.map(product =>
                    <div key={product.id} className="each_card">
                        <div className="photo_gifts">
                            <img src={product.image} alt="product.name"/>
                        </div>
                        <div className="text">
                            <h3>{product.title}</h3>
                            <p>{product.description}</p>
                        </div>
                        <div className="buttons">
                            <p>Price: <span>{product.price}</span> $</p>
                            <button onClick={() => dispatch(postAdded(product.id))}><img src={basket} alt="basket"/> В корзину</button>
                        </div>
                    </div>
                )}
            </div>
            {/*<div className="each_card">
                <img src={sets_1} alt="sets_1"/>
                <div className="card_text">
                    <h3>Набор из 9 макарон</h3>
                    <p>С праздничной печатью и пожеланиями для молодожёнов</p>
                </div>
                <div className="buttons">
                    <button className="price_button">600 руб</button>
                    <button className="basket_button"><img src={basket} alt="basket"/> В корзину</button>
                </div>
            </div>

            <div className="each_card">
                <img src={sets_2} alt="sets_2"/>
                <div className="card_text">
                    <h3>Для гостей</h3>
                    <p>Подарочный набор из 2 макарон с печатью жениха и невесты в прозрачной упаковке</p>
                </div>
                <div className="buttons">
                    <button className="price_button">200 руб</button>
                    <button className="basket_button"><img src={basket} alt="basket"/> В корзину</button>
                </div>
            </div>

            <div className="each_card">
                <img src={sets_3} alt="sets_3"/>
                <div className="card_text">
                    <h3>Пирамидка из макаронс</h3>
                    <p>Прекрасное дополнение праздничного стола Прекрасное дополнение праздничного стола</p>
                </div>
                <div className="buttons">
                    <button className="price_button">6600 руб</button>
                    <button className="basket_button"><img src={basket} alt="basket"/> В корзину</button>
                </div>
            </div>

            <div className="each_card">
                <img src={sets_4} alt="sets_4"/>
                <div className="card_text">
                    <h3>Большая пирамида (10 этажей) </h3>
                    <p>Для свадьбы или банкета, 240 макарон  по вашему выбору </p>
                </div>
                <div className="buttons">
                    <button className="price_button">14400 руб</button>
                    <button className="basket_button"><img src={basket} alt="basket"/> В корзину</button>
                </div>
            </div>

            <div className="each_card">
                <img src={sets_5} alt="sets_5"/>
                <div className="card_text">
                    <h3>Макаронс с именами гостей</h3>
                    <p>Описание предложения на пару строк или более Описание предложения на пару строк или более</p>
                </div>
                <div className="buttons">
                    <button className="price_button">80 руб</button>
                    <button className="basket_button"><img src={basket} alt="basket"/> В корзину</button>
                </div>
            </div>

            <div className="each_card">
                <img src={sets_6} alt="sets_6"/>
                <div className="card_text">
                    <h3>Набор для девичника</h3>
                    <p>Дерзкий набор для девичника. 30 макаронс с разными вкусами и забавными назписями</p>
                </div>
                <div className="buttons">
                    <button className="price_button">3900 руб</button>
                    <button className="basket_button"><img src={basket} alt="basket"/> В корзину</button>
                </div>
            </div>*/}


        </div>
    );
};

export default SetsForWedding;
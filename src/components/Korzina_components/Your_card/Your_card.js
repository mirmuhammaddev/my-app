import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {increment, decrement, incrementByAmount, postDelete} from "../../productSlice";
import "./Your_card2.style.css"
import RouterLinks from "../../Router_links/Router_links";
import photo_product_1 from "../../../assets/photos/photo_product_1.png"
import photo_product_2 from "../../../assets/photos/photo_product_2.png"
import delete_vector from "../../../assets/icons/delete_vector.svg"
import product_photo_3 from "../../../assets/photos/product_photo_3.png"
import product_photo_4 from "../../../assets/photos/product_photo_4.png"

const YourCard = () => {
    const products = useSelector(state => state.product.cart);
    const loading = useSelector(state => state.product.isLoading);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: 'products/getProductsFetch'})
    }, [dispatch]);

    console.log('products', products);
    return (
        <div className="all_your_cards">
        <div className="your_card">
            <RouterLinks/>
            <div className="title">
                <h1>Ваша корзина</h1>
                <p>{products.length} товара / 1030 руб.</p>
            </div>

                {loading && "Loading..."}
                <div className="all_product">
                    {!loading && products.map(product =>
                        <div key={product.id} className="each_product">
                            <div className="photo_product">
                                <img src={product.image} alt="product.name"/>
                            </div>
                            <div className="delete_button">
                                <div className="name_of_product">
                                    <h2>{product.title}</h2>
                                    <h5>Price: {product.price}</h5>
                                    <p>{product.description}</p>
                                    <div className="increment_decrement_button">
                                    <button onClick={() => dispatch(increment(product.id))}>+</button>
                                    <p>{product.count}</p>
                                    <button onClick={() => dispatch(decrement(product.id))}>-</button>
                                    <button onClick={() => dispatch(incrementByAmount(+5))}>+5</button>
                                    </div>
                                </div>
                                <button onClick={() => dispatch(postDelete(product.id))} className="button_for_delete"><img src={delete_vector} alt="delete_vector"/></button>
                            </div>
                        </div>
                    )}
                </div>

            {/*<div className="products_in_card_and_price">
                <div className="products_in_card">
                    <div className="my_products">

                        <div className="each_product">
                            <div className="photo_product_and_name">
                                <img src={photo_product_1} alt="photo_product_1"/>
                                <div className="name_of_product_and_discount">
                                    <h3>Набор макарон 12 шт.</h3>
                                    <div className="compound">
                                        <p>Трюфель 2 шт.</p>
                                        <p>Розмарин 3 шт.</p>
                                        <p>Ананас 1 шт.</p>
                                        <p>Кокос 4 шт.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="amount_of_products">
                                <button>-</button>
                                <p>1</p>
                                <button>+</button>
                            </div>
                            <div className="price_of_product">
                                <h4 className="price">Цена:</h4>
                                <h4> 950 руб.</h4>
                            </div>
                            <div className="button_for_delete">
                                <button><img src={delete_vector} alt="delete_vector"/></button>
                            </div>
                        </div>

                        <div className="each_product">
                            <div className="photo_product_and_name">
                                <img src={photo_product_2} alt="photo_product_2"/>
                                <div className="name_of_product_and_discount">
                                    <h3>Упаковка с цветами</h3>
                                </div>
                            </div>
                            <div className="amount_of_products">
                                <button>-</button>
                                <p>1</p>
                                <button>+</button>
                            </div>
                            <div className="price_of_product">
                                <h4 className="price">Цена:</h4>
                                <h4> 50 руб.</h4>

                            </div>
                            <div className="button_for_delete">
                                <button><img src={delete_vector} alt="delete_vector"/></button>
                            </div>
                        </div>

                        <div className="each_product">
                            <div className="photo_product_and_name">
                                <img src={photo_product_2} alt="photo_product_2"/>
                                <div className="name_of_product_and_discount">
                                    <h3>Открытка с пожелаением</h3>
                                </div>
                            </div>
                            <div className="amount_of_products">
                                <button>-</button>
                                <p>1</p>
                                <button>+</button>
                            </div>

                            <div className="price_of_product">
                                <h4 className="price">Цена:</h4>
                                <h4> 30 руб.</h4>
                            </div>
                            <div className="button_for_delete">
                                <button><img src={delete_vector} alt="delete_vector"/></button>
                            </div>
                           </div>

                        <div className="total_cost">
                            <p>Общая стоимость Вашей покупки без учета доставки составит:</p>
                            <div className="total_price">
                                <h2>1000 руб.</h2>
                                <h4>1100 руб.</h4>
                            </div>
                        </div>
                    </div>

                    <div className="with_us_cheaper">
                        <h4>Вместе дешевле!</h4>
                    </div>

                    <div className="my_products">
                        <div className="each_product">
                            <div className="photo_product_and_name">
                                <img src={product_photo_3} alt="product_photo_3"/>
                                <div className="name_of_product_and_discount">
                                    <h3>Набор эклеров </h3>
                                </div>
                            </div>
                            <div className="amount_of_products">
                                <button>-</button>
                                <p>0</p>
                                <button>+</button>
                            </div>
                            <div className="price_of_product">
                                <h4 className="price">Цена:</h4>
                                <h4> 400 руб.</h4>
                            </div>
                        </div>

                        <div className="each_product">
                            <div className="photo_product_and_name">
                                <img src={product_photo_4} alt="product_photo_4"/>
                                <div className="name_of_product_and_discount">
                                    <h3>Набор трубочек со сгущёнкой</h3>
                                </div>
                            </div>
                            <div className="amount_of_products">
                                <button>-</button>
                                <p>0</p>
                                <button>+</button>
                            </div>
                            <div className="price_of_product">
                                <h4 className="price">Цена:</h4>
                                <h4> 400 руб.</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="total">

                        <div className="products">
                            <h3>Итого</h3>
                                <div className="each_product">
                                    <p>Стоимость товаров</p>
                                    <p>700 руб</p>
                                </div>

                            <div className="each_product">
                                    <p>Скидка</p>
                                    <p>0 руб</p>
                                </div>

                            <div className="each_product">
                                    <p>Доставка</p>
                                    <p>400 руб</p>
                                </div>
                        </div>

                        <div className="for_payment">
                            <p>К оплате</p>
                            <h4>1100 руб</h4>
                        </div>
                    <form className="promo_code">
                        <label htmlFor="">Промокод:</label>
                        <div className="button_and_input">
                            <input type="text" placeholder="Введите промокод"/>
                            <button>Применить</button>
                        </div>
                    </form>
                    <div className="button_do_order">
                        <button>Оформить заказ</button>
                    </div>
                </div>
            </div>*/}
        </div>
        </div>
    );
};

export default YourCard;
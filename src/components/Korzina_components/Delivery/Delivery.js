import React from 'react';
import "./Delivery.css"
import express_delivery from "../../../assets/icons/express_delivery_icon.svg"
import pickup from "../../../assets/icons/pickup_icon.svg"
import check_mark from "../../../assets/icons/check_mark.svg"
import {Link} from "react-router-dom";

const Delivery = () => {
    return (
        <div className="delivery">
            <div className="title">
                <h1>Доставка</h1>
                <p>Укажите контактные  данные и выберите способ доставки</p>
            </div>
            <form className="inputs" >
                <div className="name_and_phone_number">
                    <div className="each_input">
                        <label htmlFor="">Ваше имя*</label>
                        <input type="text" placeholder="Укажите имя"/>
                    </div>
                    <div className="each_input">
                        <label htmlFor="">Ваш телефон*</label>
                        <input type="text" placeholder="+7 (___) ___-__-__"/>
                    </div>
                </div>

                <div className="delivery_methods">
                    <label htmlFor="">Способ доставки:</label>
                    <div className="methods_buttons">
                        <button>
                            <img src={express_delivery} alt="express_delivery"/>
                            <div className="text">
                                <p>Курьерская доставка</p>
                                <p className="price">400 руб.</p>
                            </div>
                        </button>
                        <button>
                            <img src={pickup} alt="pickup"/>
                            <div className="text">
                                <p>Самовывоз</p>
                                <p className="price">Бесплатно</p>
                            </div>
                        </button>
                    </div>
                </div>
                <div className="delivery_address">
                    <label htmlFor="">Адрес доставки</label>
                    <textarea name="delivery_address_textarea" id="delivery_address_textarea" cols="30" rows="10"
                              placeholder="Не нужно заполнять при самовывозе">
                    </textarea>
                </div>
                <div className="data_and_time">
                    <div className="each_input">
                        <label htmlFor="">Дата получения</label>
                        <input type="date"/>
                    </div>
                    <div className="each_input">
                        <label htmlFor="">Время</label>
                        <input type="time"/>
                    </div>
                </div>
                <div className="comments_on_order">
                    <label htmlFor="">Комментарий к заказe</label>
                        <textarea name="comments_on_order_textarea" id="comments_on_order_textarea" cols="30" rows="10"
                                  placeholder="Здесь Вы можете написать пожелания, относительно анонимной доставки, текста открытки и другое.">
                        </textarea>
                </div>
                <div className="payment_methods">
                    <label htmlFor="">Метод оплаты</label>
                    <div className="all_methods">
                        <div className="each_method">
                            <input type="checkbox"/>
                            <p>Оплата картой онлайн</p>
                        </div>
                        <div className="each_method">
                            <button><img src={check_mark} alt="check_mark"/></button>
                            <p>Наличными при получении</p>
                        </div>
                        <div className="each_method">
                            <button><img src={check_mark} alt="check_mark"/></button>
                            <p>Яндекс деньги</p>
                        </div>
                    </div>

                </div>

                <div className="total_amount">
                    <p>Итоговая сумма заказа вместе с доставкой:</p>
                    <p className="price">1400 руб.</p>
                </div>

                <div className="button_checkout">
                    <button>Оформить заказ</button>
                </div>

                <div className="agreement">
                    <p>Нажимая на кнопку "Оформить заказ" Я принимаю и соглашаюсь с <span><Link to="">Договором оферты</Link></span>  и разрешаю обработку
                        моих персональных данных в соответствии с <span><Link to="">Политикой конфиденциальности</Link></span></p>
                </div>

            </form>
        </div>
    );
};

export default Delivery;
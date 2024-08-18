import React from 'react';
import "./Pickup.style.css"
import location_mark_with_macaron from "../../assets/icons/location_mark_with_macaron.svg"

const Pickup = () => {
    return (
        <div className="all_information">
            <div className="pickup_and_payment">
                <div className="pickup">
                    <h4>Самовывоз</h4>
                    <p>Вы можете сделать заказ и забрать его самостоятельно с нашего производства по адресу: ул. Маршала Тухачевского 22 БЦ "Сова"</p>
                    <p>Заказ необходимо сделать до 20 часов, чтобы забрать его на следующий день в пункте самовывоза в любое удобное время в промежутке с 13 до 22 часов.</p>
                    <p>Оплатить заказ банковской картой можно заранее при оформлении. Непосредственно при получении банковской картой расплатиться нельзя.</p>
                </div>
                <div className="payment">
                    <h4>Оплата</h4>
                    <p>Вы можете оплатить заказ при получении наличными или заранее оплатить заказ банковской картой.  Для этого укажите выбранный способ при оформлении заказа. </p>
                    <p>Оплата банковской картой удобна, если вы хотите отправить десерты в подарок или не желаете возиться с наличными при получении заказа.</p>
                    <p>Если у Вас нет карты российского банка, мы можем принять оплату через платёжную систему PayPal.</p>
                </div>
            </div>

            <div className="location_img">
                <img src={location_mark_with_macaron} alt="location_mark_with_macaron"/>
            </div>
        </div>
    );
};

export default Pickup;
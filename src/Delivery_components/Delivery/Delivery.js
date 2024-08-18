import React from 'react';
import "./Delivery_style.css"
import bicycle from "../../assets/icons/bicycle.svg"
import RouterLinks from "../../components/Router_links/Router_links";

const Delivery = () => {
    return (
        <div className="main">
            <RouterLinks/>
            <div className="text">
            <div className="left_side">
                <img src={bicycle} alt="bicycle"/>
            </div>
            <div className="right_side">
                <div className="shipping_and_payment">
                    <h1>Доставка и оплата</h1>
                    <p>Для наших покупателей доступны 2 способа доставки:  <span>курьерская доставка</span> по Санкт-Петербургу в пределах КАД и <span>самовывоз</span>.</p>
                </div>

                <div className="courier_delivery">
                    <h4>Курьерска доставка:</h4>
                    <p>Курьеры работают каждый день с 11 до 21 часа.  Доставка макарон осуществляется только по Санкт-Петербургу в пределах кольцевой автомобильной дороги (КАД).<span>Точная зона доставки</span>.</p>
                    <p>Если Вы готовы принять заказ в интервале с 12 до 17 часов  или с 17 до 21 часа, то доставка будет стоить 300 рублей. </p>
                    <p>При заказе от 3000 рублей доставка БЕСПЛАТНАЯ.</p>
                    <p>При оформлении заказа до 15 часов возможна доставка  в тот же день в промежутке с 17 до 21 часа.</p>
                    <p>Курьер предупредит Вас о своём прибытии за 30-40 минут.</p>
                </div>
            </div>
            </div>
        </div>

    );
};

export default Delivery;
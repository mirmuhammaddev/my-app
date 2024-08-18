import React from 'react';
import "./Contacts.style.css"
import RouterLinks from "../components/Router_links/Router_links";
import location_mark_with_macaron from "../assets/icons/location_mark_with_macaron.svg"

const Contacts = () => {
    return (
        <div className="contacts">
            <RouterLinks/>
            <div className="img_and_services">
                <div className="location_img">
                    <img src={location_mark_with_macaron} alt="location_mark_with_macaron"/>
                </div>

            <div className="services">
                <h1>Контакты</h1>
                <div className="production">
                    <h4>Производство</h4>
                    <p>Маршала Тухачевского, 22  Время работы: с 8 до 19:30.</p>
                </div>

                <div className="pickup_points">
                    <h4>Пункты самовывоза:</h4>
                    <p>Кафе “Морошка”. Маршала Тухачевского, 22  (с 8 до 19:30)</p>
                    <p>Кафе “Мята”. Наб канала Грибоедова, 37  (с 10 до 22)</p>
                </div>

                <div className="phones">
                    <h4>Телефоны:</h4>
                    <p>8 (812) 309-82-88 основной номер</p>
                    <p>8 (981) 841-85-25 для жалоб и предложений</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Contacts;
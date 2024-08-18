import React from 'react';
import "./Corporate_gifts.style.css"
import RouterLinks from "../Router_links/Router_links";
import corporate_gift from "../../assets/icons/corporate_gift.svg"

const CorporateGifts = () => {
    return (
        <div className="corporate_gifts">
            <RouterLinks/>
            <div className="corporate_gifts_information">
                <div className="left_side">
                    <img src={corporate_gift} alt="corporate_gift"/>
                </div>

                <div className="right_side">
                    <div className='title'>
                        <h1>Корпоративные подарки</h1>
                        <p>Брендированные пирожные макарон, которые поднимут аппетит ваших клиентов или порадуют коллектив</p>
                    </div>
                    <div className="body">
                        <p>Поднять мотивацию сотрудников? Увеличить лояльность клиентов или расположить их к себе перед большой сделкой? </p>
                        <p>Мы приготовим наборы пирожных от 200 руб за шт, сделаем индивидуальный дизайн и нанесём ваши лого. Обычно готовим за 2-3 дня. </p>
                    </div>
                    <div className="button">
                        <button>Скачать весь каталог подарков</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default CorporateGifts;
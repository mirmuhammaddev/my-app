import React from 'react';
import './Ending.style.css'
import heart_frame from '../../assets/icons/heart_frame.svg'
import truck from '../../assets/icons/truck_frame.svg'
import grain from '../../assets/icons/grain_frame.svg'
import instagram from '../../assets/icons/instargram_logo.svg'
import facebook from '../../assets/icons/facebook_logo.svg'
import wk from '../../assets/icons/Vector.svg'

const Ending = () => {
    return (
        <div className='ending'>
            <div className='every_step'>
                <div className='each_step'>
                    <div className='frames'>
                        <img src={heart_frame} alt="heart_frame"/>
                        <p>Готовим вручную  и с любовью</p>
                    </div>

                    <div className='frames'>
                        <img src={truck} alt="truck"/>
                        <p>Доставим в день заказа</p>
                    </div>

                    <div className='frames'>
                        <img src={grain} alt="grain"/>
                        <p>100%  миндальная мука и натуральные ингредиенты</p>
                    </div>

                </div>

                <div className='location'>
                    <p>© 2021 Макароншоп
                        ООО "Квантум", Санкт-Петербург,  улица Маршала Тухачевского, дом 22</p>
                </div>
            </div>

            <div className='types_information'>
                <h2>Информация</h2>
                <ul>
                <li>О компании</li>
                <li>Гарантии вкуса и свежести</li>
                <li>Доставка и оплата</li>
                <li>Контакты</li>
                </ul>
            </div>

            <div className='types_information'>
                <h2>Каталог</h2>
                <ul>
                    <li>Каталог десертов</li>
                    <li>Готовые наборы</li>
                    <li>Собрать свой набор</li>
                    <li>Акции</li>
                </ul>
            </div>

            <div className='types_information'>
                <h2>ДЛЯ БИЗНЕСА</h2>
                <ul>
                    <li>Корпоративные подарки</li>
                    <li>Для юридических лиц</li>
                    <li>Оповикам</li>
                </ul>
            </div>

            <div className='social_information'>
                <div className='numbers'>
                <h2>+7 (812) 309 82 88</h2>
                <p>с 9:00 до 21:00</p>
                </div>

                <div className='social_media'>
                <div className='social_logo'>
                    <img src={instagram} alt="instagram"/>
                </div>

                <div className='social_logo'>
                    <img src={facebook} alt="facebook"/>
                </div>

                <div className='social_logo'>
                    <img src={wk} alt="wk"/>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Ending;
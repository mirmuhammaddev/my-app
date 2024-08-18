import React from 'react';
import "./News.style.css"
import RouterLinks from "../Router_links/Router_links";
import photo_1 from "../../assets/photos/photo_1.png"
import photo_2 from "../../assets/photos/photo_2.png"
import photo_3 from "../../assets/photos/photo_3.png"
import photo_4 from "../../assets/photos/photo_4.png"
import photo_5 from "../../assets/photos/photo_5.png"
import photo_6 from "../../assets/photos/photo_6.png"
import photo_7 from "../../assets/photos/photo_7.png"
import photo_8 from "../../assets/photos/photo_8.png"
import photo_9 from "../../assets/photos/photo_9.png"

const News = () => {
    return (
        <div className="news">
            <RouterLinks/>
            <h1>Новости</h1>

            <div className="all_news">
                <p>Все новости</p>
                <p>Обновления ассортимента</p>
                <p>Акции</p>
                <p>Конкурсы</p>
                <p>подарок на 8 марта</p>
                <p>весна</p>
            </div>

            <div className="all_news_cards">
                <div className="each-card">
                    <img src={photo_1} alt="photo_1"/>
                    <div className="card_text">
                        <span>05.04.2023</span>
                        <h2>Впереди праздник пасхи</h2>
                        <p>Порадуйте своих близких вкусными пасхальными наборами макарон Наша новая коллекция подарков уже в продаже</p>
                    </div>
                </div>

                <div className="each-card">
                    <img src={photo_2} alt="photo_2"/>
                    <div className="card_text">
                        <span>30.03.2023</span>
                        <h2>Аппетитные наборы с НОВЫМИ вкусами</h2>
                        <p>Готовы представить вам коллекцию новых умопомрачительных вкусов макарон </p>
                    </div>
                </div>

                <div className="each-card">
                    <img src={photo_3} alt="photo_3"/>
                    <div className="card_text">
                        <span>23.03.2023</span>
                        <h2>Мы печем пышные и мягкие маффины</h2>
                        <p>Их бархатистая структура и внушительный вес впечатляют абсолютно любого!</p>
                    </div>
                </div>

                <div className="each-card">
                    <img src={photo_4} alt="photo_4"/>
                    <div className="card_text">
                        <span>25.02.2023</span>
                        <h2>Впереди свадьба?</h2>
                        <p>Мы предлагаем несколько оригинальных и простых идей оформления. Гости точно запомнят</p>
                    </div>
                </div>

                <div className="each-card">
                    <img src={photo_5} alt="photo_5"/>
                    <div className="card_text">
                        <span>26.02.2023</span>
                        <h2>Подарки для женщина</h2>
                        <p>День Защитника Отечества уже совсем скоро! Порадуйте своего сладкоежку с помощью аппетитных наборов от МакаронШоп</p>
                    </div>
                </div>

                <div className="each-card">
                    <img src={photo_6} alt="photo_6"/>
                    <div className="card_text">
                        <span>11.02.2023</span>
                        <h2>Сладкие подарки на 23 февраля</h2>
                        <p>Наша новая серия наборов макарон создана специально для того, чтобы порадовать ваших сладкоежек. Ведь мужчины тоже любят сладенькое</p>
                    </div>
                </div>

                <div className="each-card">
                    <img src={photo_7} alt="photo_7"/>
                    <div className="card_text">
                        <span>25.02.2023</span>
                        <h2>Скоро главный праздник весны!</h2>
                        <p>Девушки любят, когда вкусно, красиво и натурально. Смотрите больше наборов с десертами ручной работы</p>
                    </div>
                </div>

                <div className="each-card">
                    <img src={photo_8} alt="photo_8"/>
                    <div className="card_text">
                        <span>17.02.2023</span>
                        <h2>Конкурс на 23 февраля!</h2>
                        <p>День Защитника Отечества уже совсем скоро! Порадуйте своего сладкоежку с помощью аппетитных наборов от МакаронШоп</p>
                    </div>
                </div>

                <div className="each-card">
                    <img src={photo_9} alt="photo_9"/>
                    <div className="card_text">
                        <span>11.02.2023</span>
                        <h2>Экспресс-конкурс ко дню Святого Валентина</h2>
                        <p>Подарок уже через 2 дняДень всех влюблённых не за горами. Расскажи о своих чувствах с помощью сладкой валентинки от МакаронШоп</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default News;
import React from 'react';
import "./Already_sets.style.css"
import PopularSets from "../popular_sets/popular_sets";
import RouterLinks from "../Router_links/Router_links";

const AlredySetsCards = () => {
    return (
        <div className="already_sets">
            <RouterLinks/>
            <h1>Готовые наборы</h1>
            <div className='list_of_holidays'>
                <div className="each_holiday">
                    <p>Свадьба</p>
                </div>
                <div className="each_holiday">
                    <p>Девичник</p>
                </div>
                <div className="each_holiday">
                    <p>День рождения </p>
                </div>
                <div className="each_holiday">
                    <p>8 марта</p>
                </div>
                <div className="each_holiday">
                    <p>23 февраля</p>
                </div>
                <div className="each_holiday">
                    <p>Новый год</p>
                </div>
                <div className="each_holiday">
                    <p>День учителя</p>
                </div>
                <div className="each_holiday">
                    <p>День тренера</p>
                </div>
                <div className="each_holiday">
                    <p>1 сентября</p>
                </div>
                <div className="each_holiday">
                    <p>Пасха</p>
                </div>
                <div className="each_holiday">
                    <p>Без печати</p>
                </div>
            </div>
            <div className="already_sets_cards">
                <PopularSets/>
            </div>
            <button>Показать ещё</button>
        </div>
    );
};

export default AlredySetsCards;
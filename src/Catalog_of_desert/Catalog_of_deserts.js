import React from 'react';
import './Catalog_of_deserts.style.css'
import catalog_main_photo from '../assets/photos/catalogs_main_foto.png'
import tubes_with_condensed_milk from '../assets/photos/tubes_with_condensed_milk.png'
import eclairs from '../assets/photos/eclairs.png'
import profiteroles from '../assets/photos/profiteroles.png'
import RouterLinks from "../../src/components/Router_links/Router_links";

const CatalogOfDeserts = () => {
    return (
        <div className='catalogs'>
            <RouterLinks/>
            <h1>Каталог десертов</h1>
            <div className='main_card'>
                <img src={catalog_main_photo} alt="catalog_main_photo"/>
                <div className='text_and_button'>
                <div className='text'>
                    <h1>Пирожные макарон</h1>
                    <p>Самые классные, самые лучшие, свежие, воздушные, хрустящие макарушки. лучшее, что мы умеем делать.</p>
                </div>
                <div className='buttons'>
                    <button>Готовые наборы</button>
                    <button>Собрать свой набор</button>
                </div>
                </div>
            </div>

            <div className='bottom_cards'>
                <div className='first_card'>
                    <img src={tubes_with_condensed_milk} alt="tubes_with_condensed_milk"/>
                    <p>Трубочки со сгущенкой</p>
                </div>
                <div className='second_card'>
                    <img src={eclairs} alt="eclairs"/>
                    <p>Эклеры</p>
                </div>
                <div className='third_card'>
                    <img src={profiteroles} alt="profiteroles"/>
                    <p>Профитроли</p>
                </div>
            </div>
        </div>
    );
};

export default CatalogOfDeserts;
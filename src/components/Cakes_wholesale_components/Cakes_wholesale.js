import React from 'react';
import "./Cakes_wholesale.style.css"
import RouterLinks from "../Router_links/Router_links";
import cakes_photo from "../../assets/photos/cakes_photo.png"

const CakesWholesale = () => {
    return (
        <div className="cakes_wholesale">
            <RouterLinks/>
            <div className="both_sides">
                <div className="left_side">
                    <img src={cakes_photo} alt="cakes_photo"/>
                </div>

                <div className="right_side">
                <div className="title">
                    <h1>Поставки пирожных оптом</h1>
                    <p>Наши макаронсы и трубочки продаются в крупнейших кондитерских и кофейных сетях Санкт-Петербурга. Присоединяйтесь! </p>
                    <div className="buttons">
                        <button>Презентация</button>
                        <button>Прайс-лист</button>
                    </div>
                </div>
                    <div className="body">
                        <p>Мы предлагаем:</p>
                        <div className="list">
                            <ul>
                                <li>прямые поставки от производителя, всегда свежая продукция;</li>
                                <li>ассортимент с высоким средним чеком и маржой; </li>
                                <li>бесплатные акриловые шоубоксы для витрины;</li>
                                <li>продукцию для дегустации или снижение цены для проведения промо-акций; </li>
                                <li>гибкие условия сотрудничества и поставок.  </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CakesWholesale;
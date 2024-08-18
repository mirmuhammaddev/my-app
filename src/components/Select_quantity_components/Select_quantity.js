import React from 'react';
import "./Select_quantity.style.css"
import RouterLinks from "../Router_links/Router_links";
import cake_photo_1 from "../../assets/photos/cake_photo_1.png"
import cake_photo_2 from "../../assets/photos/cake_photo_2.png"
import cake_photo_3 from "../../assets/photos/cake_photo_3.png"
import cake_photo_4 from "../../assets/photos/cake_photo_4.png"
import cake_photo_5 from "../../assets/photos/cake_photo_5.png"


const SelectQuantity = () => {
    return (
        <div className="select_quantity">
            <RouterLinks/>
            <h1>Выберите количество</h1>
            <div className="cakes_card">
                <div className="each_cake_card">
                    <img src={cake_photo_1} alt="cake_photo_1"/>
                    <div className="cake_card_text">
                        <h5>Набор из 6 макарон</h5>
                        <p>350 руб.</p>
                    </div>
                </div>

                <div className="each_cake_card">
                    <img src={cake_photo_2} alt="cake_photo_2"/>
                    <div className="cake_card_text">
                        <h5>Набор из 12 макарон</h5>
                        <p>700 руб.</p>
                    </div>
                </div>

                <div className="each_cake_card">
                    <img src={cake_photo_3} alt="cake_photo_3"/>
                    <div className="cake_card_text">
                        <h5>Набор из 24 макарон</h5>
                        <p>1400 руб.</p>
                    </div>
                </div>

                <div className="each_cake_card">
                    <img src={cake_photo_4} alt="cake_photo_4"/>
                    <div className="cake_card_text">
                        <h5>Набор из 48 макарон</h5>
                        <p>2800 руб.</p>
                    </div>
                </div>

                <div className="each_cake_card">
                    <img src={cake_photo_5} alt="cake_photo_5"/>
                    <div className="cake_card_text">
                        <h5>Набор из 40 макарон в круглой коробке</h5>
                        <p>3000 руб.</p>
                    </div>
                </div>

                <div className="each_cake_card">
                    <img src={cake_photo_5} alt="cake_photo_5"/>
                    <div className="cake_card_text">
                        <h5>Набор из 70 макарон в круглой коробке</h5>
                        <p>5000 руб.</p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default SelectQuantity;
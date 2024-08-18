import React from 'react';
import "./Completed_orders.style.css"
import no_photo from "../../../assets/photos/no_photo.png"
import icon_1 from "../../../assets/icons/icon_1.svg"
import icon_2 from "../../../assets/icons/icon_2.svg"
import icon_3 from "../../../assets/icons/icon_3.svg"
import icon_4 from "../../../assets/icons/icon_4.svg"
import icon_5 from "../../../assets/icons/icon_5.svg"
import icon_6 from "../../../assets/icons/icon_6.svg"


const CompletedOrders = () => {
    return (
        <div className="complete_orders">
            <h1>Мы уже выполнили заказы</h1>
            <div className="sets">
                <div className="each_set">
                    <img src={no_photo} alt="no_photo"/>
                    <p>Макароны для отеля “Бла бла”</p>
                </div>

                <div className="each_set">
                    <img src={no_photo} alt="no_photo"/>
                    <p>Набор для кафе “Мята”</p>
                </div>

                <div className="each_set">
                    <img src={no_photo} alt="no_photo"/>
                    <p>Макароны для отеля “Бла бла”</p>
                </div>

                <div className="each_set">
                    <img src={no_photo} alt="no_photo"/>
                    <p>Набор для кафе “Мята”</p>
                </div>
            </div>

            <div className="sponsors">
                <img src={icon_1} alt="icon_1"/>
                <img src={icon_2} alt="icon_2"/>
                <img src={icon_3} alt="icon_3"/>
                <img src={icon_4} alt="icon_4"/>
                <img src={icon_5} alt="icon_5"/>
                <img src={icon_6} alt="icon_6"/>
            </div>
        </div>
    );
};

export default CompletedOrders;
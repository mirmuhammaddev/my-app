import React from 'react';
import "./Offers.style.css"
import corporate_gifts from "../../../assets/icons/corporate_gifts.svg"
import online_shopping from "../../../assets/icons/online_shopping.svg"
import wholesale_supplies from "../../../assets/icons/wholesale_supplies.svg"
import coffee_shop from "../../../assets/icons/coffe_shop.svg"
import cooperation_with_hotels from "../../../assets/icons/cooperation_with_hotels.svg"
import retail from "../../../assets/icons/retail.svg"
import wedding_sets from "../../../assets/icons/wedding_set.svg"
import collect_set from "../../../assets/icons/collect_sets.svg"

const Offers = () => {
    return (
        <div className="title_offers">
            <h1>Что мы можем вам предложить:</h1>
            <div className="offers">

                <div className="each_offer">
                    <div className="offer_img">
                            <img src={corporate_gifts} alt="corporate_gifts"/>
                    </div>
                    <p>Корпоративные  подарки</p>
                </div>

                <div className="each_offer">
                    <div className="offer_img">
                        <img src={online_shopping} alt="online_shopping"/>
                    </div>
                    <p>Сотрудничество  с интернет магазинами</p>
                </div>

                <div className="each_offer">
                    <div className="offer_img">
                        <img src={wholesale_supplies} alt="wholesale_supplies"/>
                    </div>
                    <p>Сотрудничество  с кафе и ресторанами</p>
                </div>

                <div className="each_offer">
                    <div className="offer_img">
                        <img src={coffee_shop} alt="coffee_shop"/>
                    </div>
                    <p>Сотрудничество  с кофейнями</p>
                </div>

                <div className="each_offer">
                    <div className="offer_img">
                        <img src={cooperation_with_hotels} alt="cooperation_with_hotels"/>
                    </div>
                    <p>Сотрудничество с отелями</p>
                </div>

                <div className="each_offer">
                    <div className="offer_img">
                        <img src={retail} alt="retail"/>
                    </div>
                    <p>Для Retail</p>
                </div>

                <div className="each_offer">
                    <div className="offer_img">
                        <img src={wedding_sets} alt="wedding_sets"/>
                    </div>
                    <p>Кенди бары для мероприятий</p>
                </div>

                <div className="each_offer">
                    <div className="offer_img">
                        <img src={collect_set} alt="collect_set"/>
                    </div>
                    <p>И для других сфер бизнеса</p>
                </div>

            </div>

        </div>
    );
};

export default Offers;
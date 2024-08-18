import React from 'react';
import "./Heart.style.css"
import heart_big_photo from "../../assets/photos/heart_big_photo.png"
import heart from "../../assets/photos/heart_2.png"
import white_basket from "../../assets/icons/white_basket.svg"
import heart_page_delivery_icon_1 from "../../assets/icons/heart_page_delivery_icon_1.svg"
import heart_page_delivery_icon_2 from "../../assets/icons/heart_page_delivery_icon_2.svg"
import heart_page_delivery_icon_3 from "../../assets/icons/heart_page_delivery_icon_3.svg"
import RouterLinks from "../Router_links/Router_links";
import ComboSets from "../Combo_sets_components/combo_sets";

const Heart = () => {
    return (
        <div className="heart_page">
            <RouterLinks/>
            <div className="heart">
                <div className="left_side_photo">
                    <img src={heart_big_photo} alt="heart_big_photo"/>
                    <div className="three_hearts">
                        <img src={heart} alt="heart"/>
                        <img src={heart} alt="heart"/>
                        <img src={heart} alt="heart"/>
                    </div>
                </div>

                <div className="right_side_information">
                    <h1>Сердце</h1>
                    <p>40 макаронс в круглой коробке с персональной надписью</p>
                    <div className="flavors">
                        <h3>Вкусы:</h3>
                        <div className="each_flavors">
                            <p>Яблоко</p>
                            <p>4 шт.</p>
                        </div>
                        <div className="each_flavors">
                            <p>Вишня</p>
                            <p> 12 шт.</p>
                        </div>
                        <div className="each_flavors">
                            <p>Кокос</p>
                            <p>8 шт.</p>
                        </div>
                    </div>

                        <div className="prices">
                            <h1>2800 руб</h1>
                            <button><img src={white_basket} alt="white_basket"/> В корзину</button>
                        </div>

                    <div className="heart_page_delivery_information">
                        <div className="each_information">
                            <img src={heart_page_delivery_icon_1} alt="heart_page_delivery_icon_1"/>
                            <p>Доставка от 400 руб. в день заказа с 12 до 17 или с 17 до 21.  Бесплатно при заказе на сумму от 2000 руб</p>
                        </div>
                        <div className="each_information">
                            <img src={heart_page_delivery_icon_2} alt="heart_page_delivery_icon_2"/>
                            <p>Самовывоз бесплатно. Через 3 часа после оплаты заказа</p>
                        </div>
                        <div className="each_information">
                            <img src={heart_page_delivery_icon_3} alt="heart_page_delivery_icon_3"/>
                            <p>Можем преподнести как анонимный подарок:)</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="descriptions">
                <div className="navbar_of_descriptions">
                    <p>Описание</p>
                    <p>Состав и пищевая ценность</p>
                    <p>Условия и срок хранения </p>
                </div>
                <div className="title_of_descriptions">
                    <p>Текстовая информация и таблички.</p>
                    <p>Для примера рыба-текст  </p>
                </div>
                <div className="body_of_descriptions">
                 <p>  Банальные, но неопровержимые выводы, а также представители современных социальных резервов смешаны
                        с не уникальными данными до степени совершенной неузнаваемости,
                        из-за чего возрастает их статус бесполезности. Сложно сказать, почему активно развивающиеся страны третьего
                        мира неоднозначны и будут указаны как претенденты на роль ключевых факторов. Являясь всего лишь частью общей картины,
                        диаграммы связей призывают нас к новым свершениям, которые, в свою очередь, должны быть своевременно верифицированы.
                 </p>
                </div>
            </div>
            <ComboSets/>
        </div>
    );
};

export default Heart;
//import React, {useState} from 'react';
//import {} from "@reduxjs/toolkit"
import "./Select_flavors.style.css"
import RouterLinks from "../Router_links/Router_links";
import flavor_photo_1_7 from "../../assets/photos/flavor_photo_1_7.png"
import flavor_photo_2_8 from "../../assets/photos/flavor_photo_2_8.png"
import flavor_photo_3_9 from "../../assets/photos/flavor_photo_3_9.png"
import flavor_photo_4 from "../../assets/photos/flavor_photo_4.png"
import flavor_photo_5 from "../../assets/photos/flavor_photo_5.png"
import flavor_photo_6 from "../../assets/photos/flavor_photo_6.png"
import logo_minus from  "../../assets/icons/logo-.svg"
import logo_plus from "../../assets/icons/logo+.svg"
import delete_vector from "../../assets/icons/delete_vector.svg"
import React from "react";
/*{
    products: [{id: 1, name: "vsvd"}, {id: 2, name: "vsvd"}],
        cart: [{id: 1, name: "vsvd", count: 4},{id: 2, name: "vsvd", caount:  1}]
}*/

/*const [count, setCount] = useState("0");*/

const SelectFlavors = () => {

/*    function incrementItem(id) {

    }*/

    return (
        <div className="flavors">
            <RouterLinks/>
            <h1>Выберите вкусы</h1>
            <div className="flavors_cards_and_order_cards ">
                <div className="flavors_cards">
                    <div className="each_flavor_card">
                        <img src={flavor_photo_1_7} alt="flavor_photo_1_7"/>
                        <div className="card_text">
                            <h5>Шоколад, банан</h5>
                            <p>Сезонный вкус: молочный  шоколад, отборные свежие бананы</p>
                        </div>
                        <div className="footer">
                            <button><img src={logo_minus} alt="logo_minus"/></button>
                            <p>1</p>
                            <button><img src={logo_plus} alt="logo_plus"/></button>
                        </div>
                    </div>

                    <div className="each_flavor_card">
                        <img src={flavor_photo_2_8} alt="flavor_photo_2_8"/>
                        <div className="card_text">
                            <h5>Облепиха, розмарин</h5>
                            <p>Сезонный вкус: белый шоколад, свежие ягоды облепихи, немного розмарина</p>
                        </div>
                        <div className="footer">
                            <button><img src={logo_minus} alt="logo_minus"/></button>
                            <p>1</p>
                            <button>+</button>
                        </div>
                    </div>

                    <div className="each_flavor_card">
                        <img src={flavor_photo_3_9} alt="flavor_photo_3_9"/>
                        <div className="card_text">
                            <h5>Чёрный трюфель</h5>
                            <p>Белый шоколад, сливки и паста из летнего чёрного итальянского трюфеля.</p>
                        </div>
                        <div className="footer">
                            <button><img src={logo_minus} alt="logo_minus"/></button>
                            <p>1</p>
                            <button><img src={logo_plus} alt="logo_plus"/></button>
                        </div>
                    </div>

                    <div className="each_flavor_card">
                        <img src={flavor_photo_4} alt="flavor_photo_4"/>
                        <div className="card_text">
                            <h5>Голубой сыр</h5>
                            <p>Наш самы пикантный и один из самых популярных вкусов. Это нужно попробовать!</p>
                        </div>
                        <div className="footer">
                            <button><img src={logo_minus} alt="logo_minus"/></button>
                            <p>1</p>
                            <button><img src={logo_plus} alt="logo_plus"/></button>
                        </div>
                    </div>

                    <div className="each_flavor_card">
                        <img src={flavor_photo_5} alt="flavor_photo_5"/>
                        <div className="card_text">
                            <h5>Пармезан</h5>
                            <p>Пикантный сладко-соленый вкус. Начинка изготавливается с использованием настоящего
                                итальянского сыра Parmigiano Reggiano и Grana Padano категории DOP.</p>
                        </div>
                        <div className="footer">
                            <button><img src={logo_minus} alt="logo_minus"/></button>
                            <p>1</p>
                            <button><img src={logo_plus} alt="logo_plus"/></button>
                        </div>
                    </div>

                    <div className="each_flavor_card">
                        <img src={flavor_photo_6} alt="flavor_photo_6"/>
                        <div className="card_text">
                            <h5>Песто </h5>
                            <p>Внутри ингредиетны классического песто - свежий ароматный базилик, итальянский пармезан,
                                кедровые орешки и всё это в виде ганаша на белом шоколаде.</p>
                        </div>
                        <div className="footer">
                            <button><img src={logo_minus} alt="logo_minus"/></button>
                            <p>1</p>
                            <button><img src={logo_plus} alt="logo_plus"/></button>
                    </div>
                    </div>

                    <div className="each_flavor_card">
                        <img src={flavor_photo_1_7} alt="flavor_photo_1_7"/>
                        <div className="card_text">
                            <h5>Шоколад, банан</h5>
                            <p>Сезонный вкус: молочный  шоколад, отборные свежие бананы</p>
                        </div>
                        <div className="footer">
                            <button><img src={logo_minus} alt="logo_minus"/></button>
                            <p>1</p>
                            <button><img src={logo_plus} alt="logo_plus"/></button>
                        </div>
                    </div>

                    <div className="each_flavor_card">
                        <img src={flavor_photo_2_8} alt="flavor_photo_2_8"/>
                        <div className="card_text">
                            <h5>Облепиха, розмарин</h5>
                            <p>Сезонный вкус: белый шоколад, свежие ягоды облепихи, немного розмарина</p>
                        </div>
                        <div className="footer">
                            <button><img src={logo_minus} alt="logo_minus"/></button>
                            <p>1</p>
                            <button><img src={logo_plus} alt="logo_plus"/></button>
                        </div>
                    </div>

                    <div className="each_flavor_card">
                        <img src={flavor_photo_3_9} alt="flavor_photo_3_9"/>
                        <div className="card_text">
                            <h5>Чёрный трюфель</h5>
                            <p>Белый шоколад, сливки и паста из летнего чёрного итальянского трюфеля.</p>
                        </div>
                        <div className="footer">
                            <button><img src={logo_minus} alt="logo_minus"/></button>
                            <p>1</p>
                            <button><img src={logo_plus} alt="logo_plus"/></button>
                        </div>
                    </div>
                </div>

                <div className="order_card">
                    <div className="title">
                        <p>7 из 12 шт.</p>
                        <span>700 руб.</span>
                    </div>
                    <div className="list_of_products">
                        <div className="each_product">
                            <p>Ананас</p>
                            <div className="quantity_of_product_and_delete">
                                <div className="quantity_of_product">
                                    <button>-</button>
                                    <p>1</p>
                                    <button>+</button>
                                </div>
                                <div className="delete">
                                    <button><img src={delete_vector} alt="delete_vector"/></button>
                                </div>
                            </div>
                        </div>

                        <div className="each_product">
                            <p>Яблоко</p>
                            <div className="quantity_of_product_and_delete">
                                <div className="quantity_of_product">
                                    <button>-</button>
                                    <p>1</p>
                                    <button>+</button>
                                </div>
                                <div className="delete">
                                    <button><img src={delete_vector} alt="delete_vector"/></button>
                                </div>
                            </div>
                        </div>

                        <div className="each_product">
                            <p>Вишня</p>
                            <div className="quantity_of_product_and_delete">
                                <div className="quantity_of_product">
                                    <button>-</button>
                                    <p>1</p>
                                    <button>+</button>
                                </div>
                                <div className="delete">
                                    <button><img src={delete_vector} alt="delete_vector"/></button>
                                </div>
                            </div>
                        </div>

                        <div className="each_product">
                            <p>Кокос</p>
                            <div className="quantity_of_product_and_delete">
                                <div className="quantity_of_product">
                                    <button>-</button>
                                    <p>1</p>
                                    <button>+</button>
                                </div>
                                <div className="delete">
                                    <button><img src={delete_vector} alt="delete_vector"/></button>
                                </div>
                            </div>
                        </div>

                        <div className="each_product">
                            <p>Пармезан</p>
                            <div className="quantity_of_product_and_delete">
                                <div className="quantity_of_product">
                                    <button>-</button>
                                    <p>1</p>
                                    <button>+</button>
                                </div>
                                <div className="delete">
                                    <button><img src={delete_vector} alt="delete_vector"/></button>
                                </div>
                            </div>
                        </div>

                        <div className="each_product">
                            <p>Чесночок</p>
                            <div className="quantity_of_product_and_delete">
                                <div className="quantity_of_product">
                                    <button>-</button>
                                    <p>3</p>
                                    <button>+</button>
                                </div>
                                <div className="delete">
                                    <button><img src={delete_vector} alt="delete_vector"/></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="checkout_and_collect_set">
                        <p>Для продолжения количество макарон должно равняться 12 шт.</p>
                        <div className="buttons">
                            <button className="checkout_button">Оформить заказ</button>
                            <button className="collect_set_button">Собрать еще набор</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectFlavors;
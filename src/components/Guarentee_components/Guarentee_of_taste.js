import React from 'react';
import "./Guarentee_of_taste.style.css"
import RouterLinks from "../Router_links/Router_links";
import almond_flour from "../../assets/photos/almond_flour.png"
import food_dyes from "../../assets/photos/food_dyes.png"
import fruit_purees from "../../assets/photos/fruit_purees.png"

const GuarenteeOfTaste = () => {
    return (
        <div className="guarantee_of_taste">
            <div className="title">
                <RouterLinks/>
                <h1>Гарантии вкуса и качества</h1>
                <p>При изготовлении пирожных мы используем только натуральные ингредиенты, избегая использования конвер</p>
            </div>

            <div className="cards">
                <div className="each_card">
                    <img src={almond_flour} alt="almond_flour"/>
                    <p>100%  миндальная мука</p>
                </div>

                <div className="each_card">
                    <img src={food_dyes} alt="food_dyes"/>
                    <p>100%  безопасные пищевые красители</p>
                </div>

                <div className="each_card">
                    <img src={fruit_purees} alt="fruit_purees"/>
                    <p>100%  фруктовые пюре и натруральные ингредиенты</p>
                </div>
            </div>
        </div>
    );
};

export default GuarenteeOfTaste;
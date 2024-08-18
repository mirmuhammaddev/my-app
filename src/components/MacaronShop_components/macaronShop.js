import React from 'react';
import "./macaronShop.styles.css";
import macaron from '../../assets/icons/macaron.svg'
import line from '../../assets/icons/Line.svg'
import RouterLinks from "./../Router_links/Router_links";

const MacaronShop = () => {
    return (
        <div className="links">
            <RouterLinks/>
            <div className="macaronShop">
                <div className="left_side">
                    <img src={macaron} alt="macaron"/>
                </div>
                <div className="right_side">
                    <div className="title">
                        <h2>Macaronshop</h2>
                        <p><img src={line} alt="line"/> since 2013 <img src={line} alt="line"/></p>
                    </div>
                    <div className="body">
                        <h1>Настоящая любовь</h1>
                        <p>Пирожные макарон и другие десерты из натуральных ингредиентов, приготовленные с любовью</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MacaronShop;
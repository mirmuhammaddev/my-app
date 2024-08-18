import React from 'react';
import "../../Cakes_wholesale_components/Cakes_wholesale.style.css"
import RouterLinks from "../../Router_links/Router_links";
import vazochka from "../../../assets/icons/vazochka.svg"

const WeddingOffer = () => {
    return (
        <div className="cakes_wholesale">
            <RouterLinks/>
            <div className="both_sides">
                <div className="left_side">
                    <img src={vazochka} alt="vazochka"/>
                </div>

                <div className="right_side">
                    <div className="title">
                        <h1>Свадебное предложение</h1>
                        <p>Нежные пирожные макаронс с разными вкусами для украшения вашего свадебного торжества</p>
                        <div className="buttons">
                            <button>Презентация</button>
                            <button>Прайс-лист</button>
                        </div>
                    </div>

                    <div className="body">
                        <p>Рыба-текст предложения </p>
                        <p>Приятно, граждане, наблюдать, как действия представителей оппозиции, превозмогая сложившуюся
                            непростую экономическую ситуацию, смешаны с не уникальными данными до степени совершенной
                            неузнаваемости, из-за чего возрастает их статус бесполезности. </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeddingOffer;
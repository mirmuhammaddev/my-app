import React from 'react';
import './Combo_sets.style.css'
import macaron_and_ecler from '../../assets/photos/macaron_and_ecler.png'
import little_bit from '../../assets/photos/little_bit.png'
import even_more from '../../assets/photos/even_more.png'
import and_even_more from '../../assets/photos/and_even_more.png'
import basket from "../../assets/icons/basket.svg"
import SetsForWedding from "../For_wedding_components/Sets_for_wedding/Sets_for_wedding";

const ComboSets = () => {
    return (
        <div className="combo_sets">
        <SetsForWedding/>
            {/*<div className='title'>
                <h1>Хотите попробовать  всё сразу? </h1>
                <p>Тогда взгляните на наши комбо-наборы</p>
            </div>
            <div className='body'>
                <div className='card_sweets'>
                    <img src={macaron_and_ecler} alt="macaron_and_ecler"/>
                    <div className='text'>
                        <h3>1 макарон и 1 эклер</h3>
                        <p>3 эклера, 4 трубочки, 6 макарун.  Вкусы: клубника - базилик, кокос, голубой сыр, пармезан</p>
                    </div>
                    <div className='button_price'>
                        <button><span>90 руб</span></button>
                        <button><img src={basket} alt="basket"/> В корзину</button>
                    </div>
                </div>

                <div className='card_sweets'>
                    <img src={little_bit} alt="little_bit"/>
                    <div className='text'>
                        <h3>Всего понемногу </h3>
                        <p>3 эклера, 4 трубочки, 6 макарун.  Вкусы: клубника - базилик, кокос, голубой сыр, пармезан</p>
                    </div>
                    <div className='button_price'>
                        <button><span>750 руб</span></button>
                        <button><img src={basket} alt="basket"/> В корзину</button>
                    </div>

                </div>

                <div className='card_sweets'>
                    <img src={even_more} alt="even_more"/>
                    <div className='text'>
                        <h3>Ещё побольше</h3>
                        <p>3 эклера, 4 трубочки, 6 макарун.  Вкусы: клубника - базилик, кокос, голубой сыр, пармезан</p>
                    </div>
                    <div className='button_price'>
                        <button><span>3900 руб</span></button>
                        <button><img src={basket} alt="basket"/> В корзину</button>
                    </div>
                </div>

                <div className='card_sweets'>
                    <img src={and_even_more} alt="and_even_more"/>
                    <div className='text'>
                        <h3>Ещё побольше</h3>
                        <p>3 эклера, 4 трубочки, 6 макарун.  Вкусы: клубника - базилик, кокос, голубой сыр, пармезан</p>
                    </div>
                    <div className='button_price'>
                        <button><span>3900 руб</span></button>
                        <button><img src={basket} alt="basket"/> В корзину</button>
                    </div>
                </div>
            </div>

            <div className="all_ready_sets">
                <button>Все готовые наборы</button>
            </div>*/}
        </div>
    );
};

export default ComboSets;
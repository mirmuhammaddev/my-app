import React from 'react';
import cart from "../../assets/icons/cart.svg";
import "./Card.styles.css";
const Card = ({image, title, description, price}) => {
    return (
        <div className='card'>
            <img src={image} alt=""/>
            <div className="content">
                <h3 className="title">{title}</h3>
                <p className="text">{description}</p>
            </div>
            <div className="footer">
                <div className="price">
                    <span>{price} руб</span>
                </div>
                <div className="action">
                    <button>
                        <img src={cart} alt=""/>
                        <span>В корзину</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import './promotions.style.css'
import promotions_photo_1 from '../../assets/photos/promotions_photo_1.png'
import promotions_photo_2 from '../../assets/photos/promotions_photo_2.png'
import promotions_photo_3 from '../../assets/photos/promotions_photo_3.png'
import promotions_photo_4 from '../../assets/photos/promotions_photo_4.png'

const Promotions = () => {

    const products = useSelector(state => state.product.products);
    const loading = useSelector(state => state.product.isLoading);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: "products/getProductsFetch"})
    },[dispatch] );
    return (
        <>
            <h1>Акции</h1>
        <div className='promotions'>
            {loading && "loading.."}
                {!loading && products.map(product =>
                    <div key={product.id} className="promotions_cards">
                        <div className="product_photo">
                            <img src={product.image} alt="product.name"/>
                        </div>
                        <div className="product_description">
                            <p>{product.description}</p>
                        </div>
                    </div>
                )}
                {/*<div className='promotion_delivery'>
                    <p>БЕСПЛАТНАЯ ДОСТАВКА</p>
                </div>
                <img src={promotions_photo_1} alt="promotions_photo_1"/>
                <div className='bottom_card'>
                    <p>По СПб в районе КАД –  от 3000₽ По МСК – от 5000₽</p>
                </div>

            <div className='promotions_cards'>
                <div className='promotion_delivery'>
                    <p>НОВИНКА</p>
                </div>
                <img src={promotions_photo_2} alt="promotions_photo_2"/>
                <div className='bottom_cards'>
                    <p>Шоколадное пирожное картошка на основе бисквита!</p>
                </div>
            </div>

            <div className='promotions_cards'>
                <div className='promotion_delivery'>
                    <p>НОВИНКА</p>
                </div>
                <img src={promotions_photo_3} alt="promotions_photo_3"/>
                <div className='bottom_cards'>
                    <p>Аппетитные конфеты  на основе миндального печенья и крема</p>
                </div>
            </div>

            <div className='promotions_cards'>
                <div className='promotion_delivery'>
                    <p>СЛАДКАЯ НОВИНКА</p>
                </div>
                <img src={promotions_photo_4} alt="promotions_photo_4"/>
                <div className='bottom_cards'>
                    <p>Карамель на палочке из натуральных ингредиентов</p>
                </div>
            </div>*/}
        </div>
        </>
    );
};

export default Promotions;
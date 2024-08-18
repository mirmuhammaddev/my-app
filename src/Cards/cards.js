import React from 'react';
import './cards.styles.css'
import already_sets from '../assets/icons/alredy_sets.svg'
import collect_sets from '../assets/icons/collect_sets.svg'
import sets_with_print from '../assets/icons/sets_with_print.svg'
import wedding_set from '../assets/icons/wedding_set.svg'
import corporate_gifts from '../assets/icons/corporate_gifts.svg'
import wholesale_supplies from '../assets/icons/wholesale_supplies.svg'
import arrow from '../assets/icons/arrow.svg'

const Cards = () => {
    return (
        <div className='all_cards'>
            <div className='card_1'>
                <div className='logos'>
                    <img src={already_sets} alt="already_sets"/>
                </div>
                <div className='text'>
                    <h3>Готовые наборы <img src={arrow} alt="arrow"/></h3>
                    <p>Готовые наборы со скидкой.  Вы можете подобрать набор на подходящий случай.</p>
                </div>
            </div>

            <div className='card_2'>
                <div className='logos'>
                    <img src={collect_sets} alt="collect_sets"/>
                </div>
                <div className='text'>
                    <h3>Собрать свой набор <img src={arrow} alt="arrow"/></h3>
                    <p>Выбрать количество макарун, и выбрать вкусы</p>
                </div>
            </div>

            <div className='card_3'>
                <div className='logos'>
                    <img src={sets_with_print} alt="sets_with_print"/>
                </div>
                <div className='text'>
                    <h3>Набор с индивидуальной печатью <img src={arrow} alt="arrow"/></h3>
                    <p>Собрать набор макарон с уникальным дизайном. </p>
                </div>
            </div>

            <div className='card_4'>
                <div className='logos'>
                    <img src={wedding_set} alt="wedding_set"/>
                </div>
                <div className='text'>
                    <h3>Свадебные предложения <img src={arrow} alt="arrow"/></h3>
                    <p>Нежные пирожные макаронс с разными вкусами для украшения вашего свадебного торжества</p>
                </div>
            </div>

            <div className='card_5'>
                <div className='logos'>
                    <img src={corporate_gifts} alt="corporate_gifts"/>
                </div>
                <div className='text'>
                    <h3>Корпоративные подарки <img src={arrow} alt="arrow"/></h3>
                    <p>От 85 руб за шт. С уникальным дизайном.  Приятный комплимент для коллег и партнеров</p>
                </div>
            </div>

            <div className='card_6'>
                <div className='logos'>
                    <img src={wholesale_supplies} alt="wholesale_supplies"/>
                </div>
                <div className='text'>
                    <h3>Оптовые поставки <img src={arrow} alt="arrow"/></h3>
                    <p>Предложение для кофеен, кафе, отелей и т.д. Посмотрите условия сотрудничества и отзывы.</p>
                </div>
            </div>
        </div>
    );
};

export default Cards;
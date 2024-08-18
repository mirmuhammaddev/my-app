import React from 'react';
import './Upcoming_holidays.style.css'
import frame_1 from '../../assets/icons/frame_1.svg'
import frame_2 from '../../assets/icons/frame_2.svg'
import frame_3 from '../../assets/icons/frame_3.svg'
import frame_4 from '../../assets/icons/frame_4.svg'
import frame_5 from '../../assets/icons/frame_5.svg'
import frame_6 from '../../assets/icons/frame_6.svg'

const UpcomingHolidays = () => {
    return (
        <div className='upcoming_holiday'>

            <div className='title'>
                <h1>Ближайшие праздники</h1>
            </div>

         <div className='holidays_info'>
            <div className='holidays'>
                <img src={frame_1} alt=""/>
                <p>Скоро День рождения близкого человека </p>
            </div>

            <div className='holidays'>
                <img src={frame_2} alt=""/>
                <p>1 января Новый Год 2021 </p>
            </div>

            <div className='holidays'>
                <img src={frame_3} alt=""/>
                <p>14 февраля День Святого Валентина </p>
            </div>

            <div className='holidays'>
                <img src={frame_4} alt=""/>
                <p>23 февраля День Защитника Отечества </p>
            </div>

            <div className='holidays'>
                <img src={frame_5} alt=""/>
                <p>8 марта Международный Женский День </p>
            </div>

            <div className='holidays'>
                <img src={frame_6} alt=""/>
                <p>9 марта День Сурка </p>
            </div>
         </div>
        </div>
    );
};

export default UpcomingHolidays;
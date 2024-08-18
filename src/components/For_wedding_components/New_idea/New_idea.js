import React from 'react';
import new_idea_photo from "../../../assets/photos/new_idea_photo.svg"
import "./New_idea.style.css"
import {Link} from "react-router-dom";

const NewIdea = () => {
    return (
        <div className="new_idea">
            <img src={new_idea_photo} alt="new_idea_photo"/>
            <div className="left_side_text">
                <div className="title">
                    <h1>Мы открыты для новых идей</h1>
                    <p>Каждое событие уникально и мы готовы предложить индивидуальные решения для Вашего мероптиятия</p>
                </div>
                <form action="" className="inputs">
                    <div className="name_and_phone_number">
                        <div className="name_input">
                            <label htmlFor="">Ваше имя*</label>
                            <input type="text" placeholder="Укажите имя"/>
                        </div>
                       <div className="phone_number_input">
                           <label htmlFor="">Телефон*</label>
                           <input type="text" placeholder="+7 (___) ___-__-__"/>
                       </div>

                    </div>
                    <div className="text_area">
                        <label htmlFor="">Опишите Вашу идею</label>
                        <textarea name="for_idea" id="for_idea" cols="30" rows="10"></textarea>
                    </div>
                    <button>Отправить заявку</button>
                </form>
                <p>Нажимая на кнопку "Оформить заказ" Я принимаю и соглашаюсь с <span><Link to="">Договором оферты </Link></span>
                    и разрешаю обработку моих персональных данных в соответствии с <span><Link to="">Политикой конфиденциальности</Link></span> </p>
            </div>
        </div>
    );
};

export default NewIdea;
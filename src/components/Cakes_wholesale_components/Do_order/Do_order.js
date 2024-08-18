import React, {useState} from 'react';
import "./Do_order.style.css"

const DoOrder = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isValid, setIsValid] = useState(true);
    const phoneNumberPattern = /^(?:\(\d{3}\)|\d{3}[.-]?)?\d{3}[.-]?\d{4}$/;
    const handleChange = (e) => {
        const { value } = e.target;
        setPhoneNumber(value);
        if (phoneNumberPattern.test(value)) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    };
    return (
        <div className="do_order">
            <h1>Заказать расчёт или отправить запрос  на сотрудничество</h1>
            <form className="forms">
                <div className="inputs">
                <div className="names_and_phone_number_pole">
                    <div className="each_input">
                        <label className="label">Ваше имя</label>
                        <input type="text" placeholder="Укажите имя"/>
                    </div>
                    <div className="each_input">
                        <label className="label">Ваш телефон</label>
                        <input type="text"  value={phoneNumber} onChange={handleChange} placeholder="+7 (___) ___-__-__"/>
                        {!isValid && <p style={{ color: 'red' }}>Invalid phone number</p>}
                    </div>

                </div>
                <div className="name_of_company_and_email">
                    <div className="each_input">
                        <label className="label">Название компании</label>
                        <input type="text" placeholder="Укажите имя"/>
                    </div>
                    <div className="each_input">
                        <label className="label">E-mail</label>
                        <input type="text" placeholder="+7 (___) ___-__-__"/>
                    </div>
                </div>
                <div className='textarea'>
                        <label className="label">Добавить комментарий</label>
                        <textarea name="textarea" id="textarea" cols="30" rows="10"></textarea>
                </div>

                </div>
                <button>Заказать расчёт</button>
            </form>
            <p>Нажимая на кнопку "Оформить заказ" Я принимаю и соглашаюсь с <span> Договором оферты </span>
                и разрешаю обработку моих персональных данных в соответствии с <span> Политикой конфиденциальности </span> </p>
        </div>
    );
};

export default DoOrder;
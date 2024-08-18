import React from 'react';
import "./Answers_on_questions.style.css"

const AnswersOnQuestions = () => {
    return (
        <div className="questions">
            <h1>Ответы на вопросы</h1>
            <div className="answers_and_questions">
                <div className="each_answers_and_question">
                    <div className="answer">
                        <h2>Сколько хранятся пирожные макарон?</h2>
                    </div>
                    <div className="question">
                        <p>Срок хранения бла бла бла</p>
                    </div>
                </div>

                <div className="each_answers_and_question">
                    <div className="answer">
                        <h2>как быстро мы выполняем заказы</h2>
                    </div>
                    <div className="question ">
                        <p>Стандартный срок выполнения заказа 3-5 дней, При большом тираже и в предновогодний сезон может увеличиться. Потому что...</p>
                    </div>
                </div>

                <div className="each_answers_and_question">
                    <div className="answer">
                        <h2>А за 2 дня?</h2>
                    </div>
                    <div className="question">
                        <p>Текст про дополнительную стоимость при срочных заказах</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnswersOnQuestions;
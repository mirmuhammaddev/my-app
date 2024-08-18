import React from 'react';
import CorporateGifts from "../../components/Corporate_gifts_components/Corporate_gifts";
import SomeGifts from "../../components/Corporate_gifts_components/Some_gifts_components/Some_gifts";
import CompletedOrders from "../../components/Corporate_gifts_components/Completed_orders_components/Completed_orders";
import AnswersOnQuestions from "../../components/Corporate_gifts_components/Answers_on_questions_components/Answers_on_questions";

const CorporateGiftsPage = () => {
    return (
        <div>
            <CorporateGifts/>
            <SomeGifts/>
            <CompletedOrders/>
            <AnswersOnQuestions/>
        </div>
    );
};

export default CorporateGiftsPage;
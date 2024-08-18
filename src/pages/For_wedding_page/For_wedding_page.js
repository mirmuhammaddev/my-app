import React from 'react';
import WeddingOffer from "../../components/For_wedding_components/For_wedding/Wedding_offer";
import SetsForWedding from "../../components/For_wedding_components/Sets_for_wedding/Sets_for_wedding";
import NewIdea from "../../components/For_wedding_components/New_idea/New_idea";
import AnswersOnQuestions from "../../components/For_wedding_components/Answers_on_questions/Answers_on_questions";



const ForWeddingPage = () => {
    return (
        <div>
            <WeddingOffer/>
            <SetsForWedding/>
            <NewIdea/>
            <AnswersOnQuestions/>
        </div>
    );
};

export default ForWeddingPage;
import React from 'react';
import YourCard from "../../components/Korzina_components/Your_card/Your_card";
import Delivery from "../../components/Korzina_components/Delivery/Delivery";
import ComboSets from "../../components/Combo_sets_components/combo_sets";

const KorzinaPage = () => {
    return (
        <div>
            <YourCard/>
            <Delivery/>
            <ComboSets/>
        </div>
    );
};

export default KorzinaPage;
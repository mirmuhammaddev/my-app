import React from 'react';
import CakesWholesale from "../../components/Cakes_wholesale_components/Cakes_wholesale";
import Offers from "../../components/Cakes_wholesale_components/Offers_components/Offers";
import DoOrder from "../../components/Cakes_wholesale_components/Do_order/Do_order";
import Recommends from "../../components/Cakes_wholesale_components/Recommends_components/Recommends";
import SponsorsLogo from "../../components/Cakes_wholesale_components/sponsors_logo_components/Sponsors_logo";

const CakesWholesalePage = () => {
    return (
        <div>
            <CakesWholesale/>
            <Offers/>
            <DoOrder/>
            <Recommends/>
            <SponsorsLogo/>
        </div>
    );
};

export default CakesWholesalePage;
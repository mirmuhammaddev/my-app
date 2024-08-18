import React from 'react';
import Navbar from "../../components/Navbar_components/Navbar";
import MacaronShop from '../../components/MacaronShop_components/macaronShop'
import Cards from "../../Cards/cards";
import Promotions from "../../components/promotions_components/promotions";
import UpcomingHolidays from "../../components/Upcoming_holidays_components/Upcoming_holidays";
import Delivery from "../../components/Delivery_components/Delivery";
import Ending from "../../components/Ending_components/Ending";
import PopularSets from "../../components/popular_sets/popular_sets";
import News from "../../components/News_2_component/News";

const HomePage = () => {
    return (
        <>
         <MacaronShop/>
         <Cards/>
         <Promotions/>
         <UpcomingHolidays/>
         <PopularSets/>
         <News/>
         <Delivery/>
        </>
    );
};

export default HomePage;
import React from 'react';
import Delivery from "../../Delivery_components/Delivery/Delivery"
import Pickup from "../../Delivery_components/Pickup/Pickup";
import Map from "../../Delivery_components/Map/Map";

const Delivery_page = () => {
    return (
        <div>
            <Delivery/>
            <Pickup/>
            <Map/>
        </div>
    );
};

export default Delivery_page;
import React from 'react';
import "./Map.style.css"
import map from "../../assets/photos/map.png"

const Map = () => {
    return (
        <div className="map">
            <img src={map} alt="map"/>
        </div>
    );
};

export default Map;
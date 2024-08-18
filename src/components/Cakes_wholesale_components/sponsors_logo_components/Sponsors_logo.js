import React from 'react';
import "./Sponsors_logo.style.css"
import icon_1 from "../../../assets/icons/icon_1.svg"
import icon_2 from "../../../assets/icons/icon_2.svg"
import icon_3 from "../../../assets/icons/icon_3.svg"
import icon_4 from "../../../assets/icons/icon_4.svg"
import icon_5 from "../../../assets/icons/icon_5.svg"
import icon_6 from "../../../assets/icons/icon_6.svg"


const SponsorsLogo = () => {
    return (
        <div className="sponsors_logo">
            <img src={icon_1} alt="icon_1"/>
            <img src={icon_2} alt="icon_2"/>
            <img src={icon_3} alt="icon_3"/>
            <img src={icon_4} alt="icon_4"/>
            <img src={icon_5} alt="icon_5"/>
            <img src={icon_6} alt="icon_6"/>
        </div>
    );
};

export default SponsorsLogo;
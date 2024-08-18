import React from 'react';
import phone from "../../assets/icons/phone.svg";
import location from "../../assets/icons/location.svg";
import basket from "../../assets/icons/basket.svg";
import tg from "../../assets/icons/tg.svg";
import wk from "../../assets/icons/Vector.svg"
import ok from "../../assets/icons/ok.svg";
import discount from "../../assets/icons/discount.svg";
import logo from "../../assets/icons/logo.svg";
import "./Navbat.styles.css";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <>
        <div className="upper_nav">
            <ul className="forward_pages">
                <li><Link to="/Quality_assurance">Quality assurance</Link></li>
                <li><Link to="/Delivery_page">Delivery page</Link></li>
                <li><Link to="/Cakes_wholesale_page">Cakes wholesale page</Link></li>
                <li><Link to="/Contacts_page">Contacts page</Link></li>
            </ul>
            <div className="left_side">
                <div className="dropdown">
                    <img src={location} alt="location"/>
                    <select name="location" id="location">
                        <option value="saint_paintsburg">Санкт-Петербург</option>
                        <option value="moscow">Moscow</option>
                        <option value="tashkent">Tashkent</option>
                    </select>
                </div>
                <div className="contact_number">
                    <img src={phone} alt=""/>
                    <p>8 812 309-82-88</p>
                </div>
                <div className="baskets">
                    <Link to="/Korzina_page"><img src={basket} alt="basket"/>
                    <p>В корзине (4 товара)</p>
                    </Link>
                </div>
                <div className="icons">
                    <img src={tg} alt="telegram"/>
                    <img src={wk} alt="wk"/>
                    <img src={ok} alt="ok"/>
                </div>
            </div>
        </div>

            <div className="main_nav">
                <div className="main_right_side">
                    <div className="discounts">
                        <p>Sweet days</p>
                        <img src={discount} alt="discount"/>
                    </div>
                    <div className="gift_set">
                            <Link to="/Corporate_gifts_page">Corporate gifts page</Link>
                    </div>
                    <div className="collect">
                        <Link to="/Already_sets"><p>Collect sets</p></Link>
                    </div>
                </div>
                <Link to="/"><img src={logo} alt="logo"/></Link>
                <div className="main_left_side">
                    <div className="creat_design">
                        <p>Create design</p>
                    </div>
                    <div className="catalog">
                            <Link to="For_wedding_page">For wedding page</Link>
                        <div className="catalog_link">
                            <Link to="/CatalogPage/get/all">All Catalogs</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
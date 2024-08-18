import React from 'react';
import "./Router_links.style.css"
import {Link} from "react-router-dom";

const RouterLinks = () => {
    return (
        <div>
            <ul className="router_link">
                <li><Link to="/News_page">News page></Link></li>
                <li><Link to="/Heart_page">Heart page></Link></li>
                <li><Link to="/Select_quantity_page">Select quantity page></Link></li>
                <li><Link to="/Select_flavors_page">Select flavors page></Link></li>
                <li><Link to="/productState">productState</Link></li>
            </ul>
        </div>
    );
};

export default RouterLinks;
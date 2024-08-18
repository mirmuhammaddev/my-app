import React from 'react';
import CatalogOfDeserts from "../../Catalog_of_desert/Catalog_of_deserts";
import ComboSets from "../../components/Combo_sets_components/combo_sets";
import {useLocation } from 'react-router-dom';
const CatalogPage = () => {
    const location = useLocation();
    let paths = location.pathname.split("/");
    return (
        <div>
            <CatalogOfDeserts/>
            <ComboSets/>
        </div>
    );
};

export default CatalogPage;
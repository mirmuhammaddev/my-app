import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import HomePage from "./pages/homePage/HomePage";
import "./App.css";
import CatalogPage from "./pages/catalogPage/CatalogPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AlreadySets from "./pages/already_sets/Already_sets";
import QualityAssurance from "./pages/Quality_Assurance/Quality_assurance";
import ClientLayout from "./layout/ClientLayout";
import Delivery_page from "./pages/Delivery/Delivery_page";
import Contacts_page from "./pages/Contacts/Contacts_page";
import NewsPage from "./pages/News/News_page";
import HeartPage from "./pages/Heart_page/Heart_page";
import CorporateGiftsPage from "./pages/Corporate_gifts_page/Corporate_gifts_page";
import CakesWholesalePage from "./pages/Cakes_wholesale_page/Cakes_wholesale_page";
import ForWeddingPage from "./pages/For_wedding_page/For_wedding_page";
import SelectQuantityPage from "./pages/Select_quantity_page/Select_quantity_page";
import SelectFlavorsPage from "./pages/Select_flavors_page/Select_flavors_page";
import KorzinaPage from "./pages/Korzina_page/Korzina_page";
import ProductState from "./components/productState";

function App() {
    /*const products = useSelector(state => state.product.products);
    const loading = useSelector(state => state.product.isLoading);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: 'products/getProductsFetch'})
    }, [dispatch]);
    console.log('products',products);*/
    return (
        <div className="App">{/*
            <h1>Products</h1>
            <hr/>
            {loading && "Loading..."}
            <div className="gallery">
                {!loading && products.map(product =>
                    <div key={product.id} className="row">
                        <div className="column column-left">
                            <img src={product.image} alt="product.name"/>
                        </div>
                        <div className="column column-right">
                            <h2>{product.title}</h2>
                            <h5>Price: {product.price}</h5>
                            <p>{product.description}</p>
                        </div>
                    </div>
                )}
            </div>*/}

            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<ClientLayout/>}>
                        <Route index element={<HomePage/>}/>
                        <Route path="CatalogPage/get/all" element={<CatalogPage/>}/>
                        <Route path="Already_sets" element={<AlreadySets/>}/>
                        <Route path="Quality_assurance" element={<QualityAssurance/>}/>
                        <Route path="Delivery_page" element={<Delivery_page/>}/>
                        <Route path="Contacts_page" element={<Contacts_page/>}/>
                        <Route path="News_page" element={<NewsPage/>}/>
                        <Route path="Heart_page" element={<HeartPage/>}/>
                        <Route path="Corporate_gifts_page" element={<CorporateGiftsPage/>}/>
                        <Route path="Cakes_wholesale_page" element={<CakesWholesalePage/>}/>
                        <Route path="For_wedding_page" element={<ForWeddingPage/>}/>
                        <Route path="Select_quantity_page" element={<SelectQuantityPage/>}/>
                        <Route path="Select_flavors_page" element={<SelectFlavorsPage/>}/>
                        <Route path="Korzina_page" element={<KorzinaPage/>}/>
                        <Route path="productState" element={<ProductState/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

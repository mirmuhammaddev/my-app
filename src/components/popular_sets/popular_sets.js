import React, {useEffect, useState} from 'react';
import './popular_sets.style.css'
import Card from "./../Card/Card";

const PopularSets = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=6')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                return response.json()
            })
            .then(data => {
                console.log('data', data);
                setProducts(data);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:')
            });
    }, []);
    return (
        <div className="cards">
            {products.map((product) => {
                return (
                    <Card key={product.id} title={product.title} description={product.description} image={product.image} price={product.price}/>
                )
            })}
        </div>
    );
};

export default PopularSets;
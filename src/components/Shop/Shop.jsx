import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import "./Shop.css";

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <div className="shop-container">
            <div>
                {/* <h2>Products coming here!!! {products.length}</h2> */}
                <div className='product-container'>
                    {
                        products.map(product => <Product
                            product={product}
                            key={product.id}
                        ></Product>)
                    }
                </div>
            </div>

            <div className='cart-container'>
                <h3 style={{ textAlign: "center" }}>Order Summary</h3>
            </div>
        </div>
    );
};

export default Shop;
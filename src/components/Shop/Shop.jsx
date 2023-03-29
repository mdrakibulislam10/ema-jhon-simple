import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css";

const Shop = () => {
    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    // event handler
    const handleAddToCart = (product) => {
        // cart.push(product); // don't do this
        const newCart = [...cart, product];
        setCart(newCart);
    };

    return (
        <div className="shop-container">
            <div>
                {/* <h2>Products coming here!!! {products.length}</h2> */}
                <div className='product-container'>
                    {
                        products.map(product => <Product
                            product={product}
                            key={product.id}
                            handleAddToCart={handleAddToCart} // we can pass any function
                        ></Product>)
                    }
                </div>
            </div>

            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;
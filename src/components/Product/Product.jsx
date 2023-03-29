import React from 'react';
import "./Product.css";

const Product = (props) => {
    console.log(props.product);
    const { img, name, price, ratings, seller, } = props.product;
    return (
        <div className='product'>
            <div className='img'>
                <img src={img} alt="" />
            </div>
            <div className='product-info'>
                <h4 className='product-name'>{name}</h4>
                <p>Price: ${price}</p>
                <div style={{ color: "#2A414F", margin: "47px 0 60px 0", }}>
                    <p>Manufacturer: {seller}</p>
                    <p>Rating: {ratings}</p>
                </div>
            </div>
            <button className='btn-cart'>Add To Cart</button>
        </div>
    );
};

export default Product;
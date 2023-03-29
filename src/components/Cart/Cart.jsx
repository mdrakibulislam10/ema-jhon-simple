import React from 'react';
import "./Cart.css";

const Cart = ({ cart }) => {
    // const cart = props.cart; // dot notation
    // const { cart } = props; // destructuring
    console.log(cart);

    // total price
    let totalPrice = 0;
    // shipping Charge
    let totalShipping = 0;
    for (const product of cart) {
        totalPrice = totalPrice + product.price;
        totalShipping = totalShipping + product.shipping;
    };
    // tax amount
    const tax = totalPrice * 7 / 100;
    // grand total
    const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className='cart'>
            <h3 style={{ textAlign: "center" }}>Order Summary</h3>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping Charge: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
            <div className='btn-parent'>
                <button style={{ backgroundColor: "red" }}>Clear Cart</button>
                <br />
                <button>Review Cart</button>
            </div>
        </div>
    );
};

export default Cart;
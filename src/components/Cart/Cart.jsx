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
    // quantity
    let quantity = 0;
    for (const product of cart) {
        // if (!product.quantity) {
        //     product.quantity = 1;
        // }
        // condition shortcut
        // product.quantity = product.quantity || 1; // 0 is falsy;

        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    };
    // tax amount
    const tax = totalPrice * 7 / 100;
    // grand total
    const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className='cart'>
            <h3 style={{ textAlign: "center" }}>Order Summary</h3>
            <p>Selected Items: {quantity}</p>
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
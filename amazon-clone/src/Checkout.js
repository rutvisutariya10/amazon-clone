import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';

function Checkout() {
  return (
    <div className="checkout">
        <div className="checkout_cartItems">
            <img 
                className="checkout_ad"
                src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                alt="Ad on Checkout Page"
            />
            <div>
                <h2 className="checkout_title">
                    Your Shopping Basket-
                </h2>
            </div>
        </div>

        <div className="checkOut_cartInfo">
            <Subtotal />
        </div>
    </div>
  )
}

export default Checkout

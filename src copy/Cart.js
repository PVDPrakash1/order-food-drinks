import React from 'react';
import './Cart.css';
const Cart = ({items})=>{
  const totalPrice = items.reduce((total, item) => total + item.price * item.count, 0);
  const totalItems = items.reduce((total, item) => total + item.count, 0);
    return(
       <div className='cart'>
        <div className="cart-info">
          <div className="cart-details">
            <span className="item-count">{totalItems} items</span>
            <span className="separator">|</span>
            <span className="total-price">₹{totalPrice}</span>
          </div>
          <button className="view-cart-button">View Cart</button>
        </div>
      </div>
    )
}
export default Cart;
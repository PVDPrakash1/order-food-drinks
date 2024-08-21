import React, { useState } from 'react';
//import './CartDetails.css';

const CartDetails = ({items,addToCart,removeFromCart})=>{
    const [phoneNumber,setPhoneNumber] = useState('');
   
    const handleSendOtp = ()=>{
        console.log(`send OTP ${phoneNumber}`)
    }
  const subtotal = items.reduce((total, item) => total + item.price * item.count, 0);
  const gst = 0; 
  const coupons = 0; 
  const payableAmount = subtotal + gst - coupons;
    return(
   
    <div style={{ margin: '0', padding: '0' }}>
      <div className="rounded mb-4" style={{ backgroundColor: '#352e41',borderRadius:'50px', color: '#fff', width: '100vw', marginRight:'90px'}}>
        <div className="p-3">
          <h2 className="text-center">Cart Details</h2>
          {items.length > 0 ? (
            items.map((item,index) => (
              <div key={item.id} className="d-flex justify-content-between align-items-center p-2" style={{ borderBottom:items.length - 1 !== index ? '1px double #7f6d64' : 'none' }}>
                <div className="d-flex flex-column" >
                  <h4 className="mb-1" style={{fontSize: '1rem'}}>{item.name}</h4>
                  <p className="mb-0 text-success">₹{item.price}</p>
                </div>
                <div className="d-flex align-items-center bg-warning" style={{marginRight:'50px',borderRadius:'5px'}}>
                  <button className="btn btn-warning btn-sm mx-2" onClick={() => removeFromCart(item)}>-</button>
                  <span className="btn-btn-warning mx-2" style={{color:'#000'}}>{item.count}</span>
                  <button className="btn btn-warning btn-sm mx-2" onClick={() => addToCart(item)}>+</button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">Your cart is empty.</p>
          )}
        </div>
      </div>

      <div className="rounded mb-4" style={{ backgroundColor: '#352e41', color: '#fff', width: '100vw', marginRight:'100px' }}>
        <div className="p-3">
          <h3 className="text-center">User Registration</h3>
          <span className="d-block text-center mb-3" style={{fontSize:'0.7rem',fontWeight:'500',color:'#ada9a9'}}>Log in to proceed with payment and enjoy exclusive discounts</span>
          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
            <input
              type="number"
              className="form-control"
              id="phoneNumber"
              placeholder="Enter phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              style={{width:'98%'}}
            />
            <button className="btn btn-warning mt-3" style={{width:'90%',fontWeight: '700',fontSize: '1.04rem'}} onClick={handleSendOtp}>Send OTP</button>
          </div>
        </div>
      </div>

      <div className="rounded mb-4" style={{ backgroundColor: '#352e41', color: '#fff', width: '100vw',marginRight:'100px' }}>
        <div className="p-3">
          <h3 className="text-center">Bill Details</h3>
          <div className="d-flex justify-content-between mb-2">
            <div>Subtotal:</div>
            <span style={{marginRight:'50px'}}>₹{subtotal}</span>
          </div>
          <div className="d-flex justify-content-between mb-2">
            <div>GST:</div>
            <span style={{marginRight:'50px'}}>₹{gst}</span>
          </div>
          <div className="d-flex justify-content-between mb-2 me-10">
            <div>Coupons:</div>
            <span style={{marginRight:'50px'}}>₹{coupons}</span>
          </div>
          <hr style={{ borderColor: 'rgba(255, 216, 164, .368)' }} />
          <div className="d-flex justify-content-between mb-2">
            <div>Payable Amount:</div>
            <span style={{marginRight:'50px'}}>₹{payableAmount}</span>
          </div>
        </div>
      </div>

      <button className="btn btn-warning fixed-bottom m-3" style={{ width:'90%', margin: '1rem 2rem',color:'#000',left:'50px', fontWeight: '700',fontSize: '1.04rem' }}>
        Proceed to pay ₹ {payableAmount}
      </button>
    </div>
    );
  };
export default CartDetails;
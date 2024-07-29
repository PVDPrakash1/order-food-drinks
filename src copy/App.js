import React ,{useState} from 'react';
import './App.css';
import FoodTypes from './FoodTypes';
import Cart from './Cart';

function App() {
  const [cartItemCount,setCartItemCount] = useState(0);

  const addToCart = ()=>{
    setCartItemCount(cartItemCount+1);
  }
  const removeFromCart = () => {
    setCartItemCount(cartItemCount > 0 ? cartItemCount - 1 : 0);
  };
  return (
   <div className='App'>
     <FoodTypes addToCart={addToCart} removeFromCart={removeFromCart}/>
     <Cart itemsCount = {cartItemCount}/>
    </div>
    
  );
}

export default App;

import React ,{useState} from 'react';
import './App.css';
import FoodTypes from './FoodTypes';
import Cart from './Cart';

function App() {
  const [cartItems,setCartItems] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const addToCart = (item)=>{
     setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, count: i.count + 1 } : i
        );
      } else {
        return [...prevItems, { ...item, count: 1 }];
      }
    });
    setIsCartVisible(true);
  }
  const removeFromCart = (item) => {
   setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem && existingItem.count > 1) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, count: i.count - 1 } : i
        );
      } else {
        return prevItems.filter((i) => i.id !== item.id);
      }
    });
    setIsCartVisible(true);
  };
  return (
   <div className='App'>
     <FoodTypes addToCart={addToCart} removeFromCart={removeFromCart}/>
     {isCartVisible && <Cart items = {cartItems}/>}
    </div>
    
  );
}

export default App;

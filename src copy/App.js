import React ,{useState} from 'react';
import './App.css';
import FoodTypes from './FoodTypes';
import Cart from './Cart';
import CartDetails from './CartDetails';
import { BrowserRouter,Routes,Route,useLocation,useNavigate } from 'react-router-dom';



function App() {
  const [cartItems,setCartItems] = useState([]);
  //const [isCartVisible, setIsCartVisible] = useState(false);


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
    //setIsCartVisible(true);
   
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
    //setIsCartVisible(true);
    
  };
  console.log("Cart Items:", cartItems);

  return (
   <div className='App'>
    <BrowserRouter>
    <Routes>
    <Route exact path='/'
    element={ <FoodTypes addToCart={addToCart} removeFromCart={removeFromCart}/>}/>
      <Route path="/cart"
      element={<CartDetails items = {cartItems} addToCart={addToCart} removeFromCart={removeFromCart}/>} />
      </Routes>
      {/* {isCartVisible && <Cart items = {cartItems} />} */}
      <CartWithCondition cartItems={cartItems}/>
    </BrowserRouter>
    
     
     
    </div>
    
  );
}
const CartWithCondition = ({cartItems}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleViewCartClick = () => {
    navigate('/cart');
  };

  return location.pathname === '/' && cartItems.length > 0 ? (
    <Cart items={cartItems} onViewCart={handleViewCartClick} />
  ) : null;
};

export default App;

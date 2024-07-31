import React ,{useState} from 'react';
import { Accordion } from 'react-bootstrap';
import './SubCategory.css'; 

const SubCategory = ({ subcategory ,addToCart,removeFromCart}) => {
    const [showItem,setShowItem] = useState(false);
    const [showInstructions, setShowInstructions] = useState(false);
    const [instructions, setInstructions] = useState('');
    const [count,setCount] = useState({});
    

        const toggleChange =()=>{
            setShowItem(!showItem)
        }
        const handleAddInstructions = ()=>{
            setShowInstructions(!showInstructions);
           
            
        }
        const handleAddClick = (item) => {
          setCount((prevCount) => ({
            ...prevCount,
            [item.id]: (prevCount[item.id] || 0) + 1,
          }));
          addToCart(item);
        };
      
        const handleIncrement = (item) => {
          setCount((prevCount) => ({
            ...prevCount,
            [item.id]: prevCount[item.id] + 1,
          }));
          addToCart(item);
        };
      
        const handleDecrement = (item) => {
          setCount((prevCount) => ({
            ...prevCount,
            [item.id]: Math.max((prevCount[item.id] || 0) - 1, 0),
          }));
          removeFromCart(item);
        };
        
      
        return (
            <Accordion.Item eventKey={subcategory.id} key={subcategory.id}>
              <Accordion.Header className="custom-accordion-header" onClick={toggleChange}>
                <img
                  src={subcategory.image}
                  alt={subcategory.name}
                  style={{ width: '50px', height: '50px', marginRight: '10px' }}
                />
                <h3 style={{ margin: 0, flex: 1 }}>{subcategory.name}</h3>
               
              </Accordion.Header>
              {showItem && (
                <Accordion.Body>
                  <div className="items">
                    {subcategory.items.map(item => (
                      <div key={item.id} className="item-card">
                        <div className="item-info">
                          <h4>{item.name}</h4>
                          <p>RS.{item.price}/-</p>
                          <h5 className='description'>{item.description}</h5>
                          <button 
                            className="add-instruction-button"
                            onClick={handleAddInstructions}
                          >
                            <p className='button-paragraph' style={{marginTop:'10px'}}> + Add </p>
                              <p>Instructions</p>
                         </button>
                         {showInstructions && (
                            <div className='instructions-container'>
                            <textarea
                            value={instructions}
                            onChange={(e) => setInstructions(e.target.value)}
                            
                            />
                            </div>
                    )}
                      </div>
                        <div className="item-image">
                          <img
                            src={item.image}
                            alt={item.name}
                            style={{ width: '120px', height: '100px' }}
                          />
                          {count[item.id] ? (
                              <div className="item-count-controls">
                              <button onClick={() => handleDecrement(item)}>-</button>
                              <span>{count[item.id]}</span>
                              <button onClick={() => handleIncrement(item)}>+</button>
                            </div>
                          ):(
                            <button
                            className='add-button'
                            onClick={() => handleAddClick(item)}
                            >
                               ADD
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                   
                  </div>
                 
                </Accordion.Body>
              )}
            </Accordion.Item>
          );
        };
export default SubCategory;


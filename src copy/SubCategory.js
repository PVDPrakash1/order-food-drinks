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
        const handleAddClick = (itemId)=>{
          setCount({
            ...count,[itemId]:(count[itemId]||0)+1
          })
          addToCart()
        }
        const handleIncrement = (itemId) => {
          setCount({
            ...count,
            [itemId]: count[itemId] + 1,
          });
          addToCart()
        };
      
        const handleDecrement = (itemId) => {
          setCount({
            ...count,
            [itemId]: count[itemId] - 1,
          });
          removeFromCart()
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
                          <p>{item.description}</p>
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
                            style={{ width: '100px', height: '100px' }}
                          />
                          {count[item.id] ? (
                              <div className="item-count-controls">
                              <button onClick={() => handleDecrement(item.id)}>-</button>
                              <span>{count[item.id]}</span>
                              <button onClick={() => handleIncrement(item.id)}>+</button>
                            </div>
                          ):(
                            <button
                            className='add-button'
                            onClick={() => handleAddClick(item.id)}
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


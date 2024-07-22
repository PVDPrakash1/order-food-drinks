import React ,{useState} from 'react';
import { Accordion } from 'react-bootstrap';
import './SubCategory.css'; 

const SubCategory = ({ subcategory }) => {
    const [showItem,setShowItem] = useState(false);
    const [showInstructions, setShowInstructions] = useState(false);
    const [instructions, setInstructions] = useState('');

        const toggleChange =()=>{
            setShowItem(!showItem)
        }
        const handleAddInstructions = ()=>{
            setShowInstructions(!showInstructions);
        }

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
                          <button 
                            className="add-instruction-button"
                             onClick={handleAddInstructions}
                          >
                            <p className='button-paragraph'> + ADD </p>
                              <p>INSTRUCTIONS</p>
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
                          <button
                         className='add-button'>
                            ADD
                         </button>
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


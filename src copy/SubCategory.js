import React ,{useState} from 'react';
import { Accordion } from 'react-bootstrap';
//import './SubCategory.css'; 

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
            <Accordion.Header className="d-flex align-items-center w-80" onClick={toggleChange}>
                <img
                    src={subcategory.image}
                    alt={subcategory.name}
                    className="me-2 "
                    style={{ width: '50px', height: '50px' }}
                />
                <h3 className="mb-0 text-white" style={{fontSize:'1.5rem'}}>{subcategory.name}</h3>
            </Accordion.Header>
            {showItem && (
               <Accordion.Body style={{padding:'0px'}}>
               <div className="p-3 w-100" style={{background:'#30284a',color:'white',height:'auto',bottom:'50px',gap:'40px',width:'100%'}}>
                   {subcategory.items.map((item,index) => (
                       <div key={item.id} className="d-flex align-items-center " style={{borderBottom: subcategory.items.length - 1 !== index ? '1px double #7f6d64' : 'none'}} >
                           <div className="d-flex flex-grow-1 me-3">
                               <div className="flex-grow-1">
                                   <h4>{item.name}</h4>
                                   <p className="text-success">RS.{item.price}/-</p>
                                   <h5 style={{color: '#585858'}}>{item.description}</h5>
                                   <button
                                       className="btn btn-secondary mt-2 mb-0"
                                       onClick={handleAddInstructions}
                                   >
                                       + Add Instructions
                                   </button>
                                   {showInstructions && (
                                       <div style={{ width: '25%' }} className='mt-1'>
                                           <textarea
                                               value={instructions}
                                               onChange={(e) => setInstructions(e.target.value)}
                                              //  className="form-control"
                                           />
                                       </div>
                                   )}
                               </div>
                           </div>
                           <div className="d-flex flex-column align-items-center">
                               <img
                                   src={item.image}
                                   alt={item.name}
                                   className="img-fluid rounded"
                                   style={{ width: '120px', height: '100px' }}
                               />
                               {count[item.id] ? (
                                   <div className="d-flex align-items-center mt-2 bg-warning text-white rounded" style={{width:'70%',position:'relative',bottom:'25px'}}>
                                       <button className="btn btn-warning" onClick={() => handleDecrement(item)}>-</button>
                                       <span className=" btn-btn-warning mx-2" style={{color:'#000'}}>{count[item.id]}</span>
                                       <button className="btn btn-warning" onClick={() => handleIncrement(item)}>+</button>
                                   </div>
                               ) : (
                                   <button
                                       className='btn btn-warning'
                                       onClick={() => handleAddClick(item)}
                                       style={{width:'70%',position:'relative',bottom:'25px'}}
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


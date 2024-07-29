import { useState, useEffect} from 'react';
import { ScrollMenu} from 'react-horizontal-scrolling-menu';
import data from './Data.json';
import './FoodTypes.css'
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import Category from './Category';
import SubCategory from './SubCategory';
import { Accordion } from 'react-bootstrap';

const FoodTypes = ({addToCart,removeFromCart})=>{
    const [selectedCategory,setSelectedCategory] = useState(null);
   

    useEffect(() => {
        if (data.categories && data.categories.length > 0) {
          setSelectedCategory(data.categories[0]);
        }
      }, []);
    

    const handleCategoryClick = (category)=>{
      setSelectedCategory(category);
    }
   
    
return(
        <div className='container'>
            <hr lassName="divider"/>
           <ScrollMenu LeftArrow={<LeftArrow/>} RightArrow={<RightArrow/>} alignCenter={false}>
           {
            data.categories && data.categories.length>0 && data.categories.map((category)=>(
                <Category key={category.id} category={category} onClick={handleCategoryClick} isActive={selectedCategory && selectedCategory.id === category.id}/>
            ))
           }
          </ScrollMenu>
          <hr lassName="divider"/>
          {selectedCategory && selectedCategory.subcategories && selectedCategory.subcategories.length > 0 && (
        <div className='subCategories'>
            <Accordion>
          {selectedCategory.subcategories.map((subcategory) => (
            <SubCategory key={subcategory.id} subcategory={subcategory} addToCart={addToCart} removeFromCart={removeFromCart}/>
        ))}
          </Accordion>
        </div>
      )}
      
         </div>
    )
}
export default FoodTypes;
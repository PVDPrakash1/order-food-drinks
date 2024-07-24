import react from 'react';

const Category = ({ category,onClick, isActive })=>{
    
    return(
        <div  className={`react-horizontal-scrolling-menu--item ${isActive ? 'active' : ''}`} onClick={()=>onClick(category)}>
            <img src={category.image} alt={category.name}/>
            <h4>{category.name}</h4>
              
        </div>
    )
}
export default Category;
import { useState, useContext} from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import './MenuItem.css'


const Arrow = ({ disabled, onClick, className, children }) => {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={`arrow ${className}`}
            style={{ cursor: 'pointer', backgroundColor: 'white', border: 'none' }}
        >
            {children}
        </button>
    );
};
const LeftArrow = () => {
    const { isFirstItemVisible, scrollPrev } = useContext(VisibilityContext);
    return (
        <Arrow
            disabled={isFirstItemVisible}
            onClick={() => scrollPrev()}
            className="left"
        >
            &#9664;
        </Arrow>
    );
};
const RightArrow = () => {
    const { isLastItemVisible, scrollNext } = useContext(VisibilityContext);
    return (
        <Arrow
            disabled={isLastItemVisible}
            onClick={() => scrollNext()}
            className="right"
        >
            &#9654;
        </Arrow>
    );
};

const MenuItem = ()=>{
    const [data,setData] = useState([
        {
            id:1,
            image:'https://flyfeelthehigh.com/online_ordering/uploads/thumbnails/foodtypes/1.png',
            name:'Food'
        },
        {
            id:2,
            image:'https://flyfeelthehigh.com/online_ordering/uploads/thumbnails/foodtypes/3.png',
            name:'Desserts'
        },
        {
            id:3,
            image:'https://flyfeelthehigh.com/online_ordering/uploads/thumbnails/foodtypes/4.png',
            name:'Beverages'
        },
        {
            id:4,
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsOFBoSuCZzHngxMwOM7A_cPLSFmH6jDPuPg&s',
            name:'Drinks'
        },
        {
            id:5,
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcrxc54-MXHXMwpai66Iyx3Y_F2DJ0P3BERA&s',
            name:'Pizza'
        },
       
    ])
    return(
        <div className='container'>
            <hr lassName="divider"/>
           <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} alignCenter={false}>
          {
            data && data.length && data.map((item)=>(
               <div key={item.id} >
                <img src={item.image} alt='logo'/>
                <h4>{item.name}</h4>
                </div> 
            ))
          }
          </ScrollMenu>
          <hr lassName="divider"/>
         </div>
    )
}
export default MenuItem;
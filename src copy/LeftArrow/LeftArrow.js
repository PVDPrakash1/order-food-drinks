import React, { useContext } from 'react';
import { VisibilityContext } from 'react-horizontal-scrolling-menu';
import Arrow from './Arrow';

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

export default LeftArrow;

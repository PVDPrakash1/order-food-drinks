import React, { useContext } from 'react';
import { VisibilityContext } from 'react-horizontal-scrolling-menu';
import Arrow from './Arrow';

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

export default RightArrow;

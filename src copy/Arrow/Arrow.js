import React from 'react';

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
export default Arrow;



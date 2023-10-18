// Arrow.js
import React from 'react';

const Arrow = ({ direction, onClick }) => {
    return (
        <div className={`arrow ${direction}`} onClick={() => onClick(direction)}>
            {direction === 'left' ? '<' : '>'}
        </div>
    );
};

export default Arrow;
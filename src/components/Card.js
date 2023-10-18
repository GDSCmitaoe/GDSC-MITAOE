// Card.js
import React from 'react';

const Card = ({ content }) => {
    return (
        <div className="card bg-white p-4 rounded-lg shadow-md">
            {content}
        </div>
    );
};

export default Card;
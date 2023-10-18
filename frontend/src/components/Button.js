import React from 'react';

const Button = ({ text, bgColor, borderRadius, onButtonClick }) => {
    const buttonStyle = `${bgColor} ${borderRadius} py-2 px-4 text-white`;

    return (
        <button className={buttonStyle} onClick={onButtonClick}>
            {text}
        </button>
    );
};

export default Button;
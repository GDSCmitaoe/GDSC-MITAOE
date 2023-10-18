import React, { useState, useEffect } from 'react';
// import './Cursor.css';

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const setFromEvent = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', setFromEvent);

        return () => {
            window.removeEventListener('mousemove', setFromEvent);
        };
    }, []);

    return <div className="cursor" style={{ left: `${position.x}px`, top: `${position.y}px` }}></div>;
};

export default Cursor;

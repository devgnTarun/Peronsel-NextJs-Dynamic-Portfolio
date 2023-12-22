'use client'

import React, { useState } from 'react';

const Button = () => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
        setTimeout(() => {
            setIsClicked(false); // Remove the class after 1000ms (1 second)
        }, 1000);
    };

    const buttonClass = `text-gray-900 xs:text-md text-sm my-4 font-semibold px-8 py-2 rounded-3xl bg-yellow-300 border-b-4 border-yellow-500 hover:border-b-0 ${isClicked ? 'border-b-0' : ''}`;

    return (
        <button onClick={handleClick} className={buttonClass}>
            Know More
        </button>
    );
};

export default Button;

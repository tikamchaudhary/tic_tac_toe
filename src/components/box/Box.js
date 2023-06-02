import React from 'react';
import './Box.css';

const Box = ({ index, box_value, handleBoxClick, isWinner }) => {
    return (
        <button
            className='box'
            onClick={() => !isWinner && handleBoxClick(index)}
        >
            {box_value}
        </button>
    )
}

export default Box;
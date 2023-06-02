import React, { useState } from 'react';
import './Board.css';
import Box from '../box/Box';


const Board = () => {

    const [boxes, setBoxes] = useState(Array(9).fill(null));
    const [xPlaying, setXPlaying] = useState(true);

    const handleBoxClick = (index) => {
        if (boxes[index] !== null) {
            return;
        }
        const copyBoxes = [...boxes];
        copyBoxes[index] = xPlaying ? "x" : "o";
        setBoxes(copyBoxes);
        setXPlaying(!xPlaying);
    }

    const checkWinner = () => {
        const winning_conditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (const condition of winning_conditions) {
            const [a, b, c] = condition;
            if (boxes[a] !== null && boxes[a] === boxes[b] && boxes[a] === boxes[c]) {
                return boxes[a];
            }
        }

        return false;
    };

    const isWinner = checkWinner();


    const handleReset = () => {
        setBoxes(Array(9).fill(null));
        setXPlaying(true);
    }

    return (
        <>
            {isWinner ?
                <h2 style={{ textAlign: "center", color: "red" }}>
                    Player {isWinner} is winner !
                </h2> :
                <h2 style={{ textAlign: "center", color: "green" }}>
                    Player {xPlaying ? "X" : "O"} please move
                </h2>
            }
            <div className='board'>
                {
                    boxes.map((box, i) => (
                        <Box
                            key={i}
                            index={i}
                            box_value={box}
                            handleBoxClick={handleBoxClick}
                            isWinner={isWinner}
                        />
                    ))
                }
            </div>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                <button onClick={handleReset} style={{ padding: "10px" }}>Play Again</button>
            </div>
        </>
    )
}

export default Board;
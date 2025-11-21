import { useState } from 'react';

export default function GameBoard({onSelectSquare, board}) {
 
    // const [ganeBoard, setGameBoard] = useState(initialBoard);
    // function handleSelectSquare(rowIndex, colIndex) {
    //     setGameBoard(prevGameBoard => {
    //         const newGameBoard = [...prevGameBoard.map(initialArray =>[...initialArray])];
    //         newGameBoard[rowIndex][colIndex] = activeSymbol;
    //         return newGameBoard;
    //     });
    //     onSelectSquare();
    // }
    return (<ol id="game-board">
        {board.map((row,rowIndex)=><li key={rowIndex}>
            <ol>
                {row.map((playerSymbol,colIndex)=><li key={colIndex}><button onClick={()=>onSelectSquare(rowIndex,colIndex)} disabled={playerSymbol!=null}>{playerSymbol}</button></li>)}
            </ol>
            </li>)}          
        </ol>);
       
}
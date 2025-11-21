import { useState } from 'react';
import Player from './component/Player.jsx'
import GameBoard from './component/GameBoard.jsx';
import Log from './component/log.jsx';
import {WINNING_COMBINATIONS} from './component/winning-combinations.js';
import GaneOver from './component/GaneOver.jsx';  

const PLAYER={
  X:'Vinod',
  O:'Pooja'
}
const initialBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

function playerHelper(prevTurn){
let currentPlayer='X';
      if(prevTurn.length>0 && prevTurn[0].Player==='X'){
        currentPlayer='O';
      }
      return currentPlayer;
}
function deriveGaneBoard(trun){
     let ganeBoard = [...initialBoard.map((array)=>[...array])];
    for (let turn of trun) {
        const { square: { row, col }, Player } = turn;
        ganeBoard[row][col] = Player;
    }
    return ganeBoard;
}
function deriveWinner(ganeBoard,player){
  let win=null;

for(const combine of WINNING_COMBINATIONS){
  const firstSquare=ganeBoard[combine[0].row][combine[0].column];
  const secondSquare=ganeBoard[combine[1].row][combine[1].column];
   const thirdSquare=ganeBoard[combine[2].row][combine[2].column]
    if(firstSquare && firstSquare===secondSquare && firstSquare===thirdSquare){
      win=player[firstSquare];
    }
    
}
return win;
}
function App() {
const [player,setPlayer]=useState({X:'Vinod',O:'Pooja'});
const [trun,setTurn]=useState([]);
const isactive=playerHelper(trun);

const ganeBoard=deriveGaneBoard(trun);
const win=deriveWinner(ganeBoard,player);
const hasDraw=trun.length ==9 &&!win;
function handleActiveClick(rowIndex,colIndex){
    setTurn(prevTurn =>{
      const currentPlayer=playerHelper(prevTurn);
      const updatedTurn=[{square:{row: rowIndex,col: colIndex},Player: currentPlayer},...prevTurn];
      return updatedTurn;
    }
);

}
function handleRestart(){
  setTurn([]);
}
function handleNameChange(symbol,newName){
  setPlayer(prevPlayer=>{
    return{...prevPlayer,[symbol]:newName};
  });
}
return(
 <main>
  <div id='game-container'>
    <ol id='players' className='highlight-player'>
      <Player name='Vinod' symbol='X'isActive={isactive=='X'} onChangeName={handleNameChange}/>
      <Player name='Pooja' symbol='O'isActive={isactive=='O'} onChangeName={handleNameChange}/>
    </ol>
    {(win || hasDraw)&& <GaneOver winner={win} onRestart={handleRestart}/>}
    <GameBoard onSelectSquare={handleActiveClick} board={ganeBoard}/>
  </div>
  <Log turnss={trun} />
 </main>);
}

export default App

import { useState } from "react";
export default function Player({name,symbol,isActive,onChangeName}) { 
    const [isEditing,setIsEditing]= useState(false);
    const [newplayerName,setPlayerName]= useState(name);
  
    function handleClick(){
        setIsEditing(!isEditing);     
        if(isEditing){
        onChangeName(symbol,newplayerName); 
        }
    }
      function handleChange(event){
        setPlayerName(event.target.value);
    }
        let playerName=<span className="player-name">{newplayerName}</span>;

     if(isEditing){
            playerName=<input type="text" required value={newplayerName} onChange={handleChange}></input>;
        }
    return<>
  <li className={isActive?'active':undefined}>
        <span className="player">{playerName}
            <span className="player-symbol"> {symbol}</span>
        </span>
        <button onClick={handleClick}>{isEditing? 'Save':'Edit'}</button>
  </li>
    </>
}

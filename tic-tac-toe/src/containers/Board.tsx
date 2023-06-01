import React, { useState } from 'react';
import Sqaure from '../components/Sqaure';

const Board = () => {
    const [sqaures, setSqaures] = useState(Array(9).fill(null))
     const [currentPlayer, setCurrentPlayer]= useState<'X' | 'O'>(
        Math.round(Math.random() * 1) === 1 ? "X": "O"
     )
     const [winner, setWinner] = useState(null)   
     const setSquareValue=(index:any)=>{
        const newData = sqaures.map((val,i)=>{
            if(i === index){
                return currentPlayer;

            }
            return val;
        });
        setSqaures(newData)
        setCurrentPlayer(currentPlayer === "X"? "O":"X")
     }
      return (
        <div className='grid'>
            <p>Hey {currentPlayer}, Its your turn</p>
          {Array(9).fill(null).map((_, i)=>{
            return (
             <Sqaure 
            winner={winner}
            key={i} 
            onClick={()=>setSquareValue(i)}
            value={sqaures[i]}
          />
        )  
          })}
        </div>
    );
};

export default Board;
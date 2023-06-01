import React from 'react';

type Player = "X" | "O" | null
export interface SqaureProps {
    value:Player,
    onClick: ()=> void,
    winner:Player
}

const Sqaure = (props: SqaureProps) => {
    const { value, onClick,winner} = props;
   if(!value){
    return <button className='square'  onClick={onClick} disabled={Boolean(winner)}/>
   }
   return <button className={`sqaure square_${value.toLowerCase}`} disabled>{value}</button>
};

export default Sqaure;
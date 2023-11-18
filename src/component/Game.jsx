import React, { useState } from 'react'
import Numberbox from './Numberbox'
import styled from 'styled-components'
import RoleDice from './RoleDice'
import Totalscore from './Totalscore'
import Rules from './Rules'

export default function Game({isselected}) {
  const [selectednumber,setselectednumber]=useState();
  const [currentDice,setCurrentDice]=useState(1);
  const [score,setscore]=useState(0);
  const [error,seterror]=useState("");
  const [rules,setrules]=useState(false);
  
  const generaterandomNumber=(min,max)=>{
    return Math.floor(Math.random()*(max-min)+min);
}
const roledice=()=>{
      if(!selectednumber){
        seterror("you have not selected any number");
        return;
      }
      const randomnumber=generaterandomNumber(1,7);
      setCurrentDice(randomnumber);
  
      if(selectednumber===randomnumber){
        setscore(prev=>prev+randomnumber);
      }else{
        setscore(prev=>prev-2);
      }
      setselectednumber(undefined);
    }
 const reset=()=>{
       setscore(0);
       
 }
  return (
     
    <div className='game-page'>
        <div className="top">
             <Totalscore score={score}/>
             <div className="numbers">
                <Numberbox 
                selectednumber={selectednumber} 
                setselectednumber={setselectednumber}
                error={error}
                seterror={seterror}
                />
                <h3>Select Number</h3>
             </div>
        </div>
        <div className="bottom">
            <RoleDice currentDice={currentDice} roledice={roledice}/>
            <h3>Click on Dice to roll</h3>
            <button onClick={reset} className='reset'>Reset Score</button>
            <button  
            onClick={()=>setrules(prev=>!prev)}
            className='rules'>{rules ? "Hide" :"Show"} Rules</button>
            {rules && <Rules />}
        </div>
    </div>
  )
}

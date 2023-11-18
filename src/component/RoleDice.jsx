import React, { useState } from 'react'
import styled from 'styled-components'
const Img=styled.img`

`
export default function RoleDice({currentDice,roledice}) {
    
    

  return (
    <div className='dice' onClick={roledice}>
        <Img src={`/assets/dice_${currentDice}.png`} alt={`dice ${currentDice}`}/>
    </div>
  )
}

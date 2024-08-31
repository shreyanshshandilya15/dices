import React from 'react'
import { useState } from 'react';

export default function Landing({startgame}) {
  
  return (
    <div className='landing'>
         <img className='main-image' src="/assets/mainimage.jpg" alt="" />
        <div className='main-title'>
          <h1>DICE GAME</h1>
          <button onClick={startgame} className='play'>Play Now</button>
    </div>
    </div>
  )
}

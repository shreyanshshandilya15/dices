import React from 'react'

export default function Rules({downref}) {
  
  return (
    <div className='rules-book' ref={downref}> 
        <h2 >How to play dice game</h2>
        <ul className="rules-list" >
            <li>Select any number</li>
            <li>Click on dice image</li>
            <li>After clicking on dice , if selected number is equal to dice number you will get same point</li>
            <li>Otherwise 2 points will be deducted</li>
        </ul>
    </div>
  )
}


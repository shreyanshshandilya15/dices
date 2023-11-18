import React from 'react'

export default function Totalscore({score}) {
  return (
    <div className="score-table">
                <div className="score">{score}</div>
                <h3>Total Score</h3>
             </div>
  )
}

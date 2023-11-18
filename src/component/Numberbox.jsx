import React from 'react'
import { useState } from 'react';
import styled from 'styled-components';

export default function Numberbox(
  { error,
    seterror,
    selectednumber,
    setselectednumber
  })
   {
  const numberarray=[1,2,3,4,5,6];

  const numberselectorhandler=(value)=>{
    setselectednumber(value);
    seterror("");
  }
  return (
   <div className="xyz">
    <p>{error}</p>
    <div className="number-box">
       {numberarray.map((value,i)=>{
          return (
        <Box 
        isselected={value===selectednumber} 
        key={i}
        onClick={()=>numberselectorhandler(value)}
        >
            {value}
            </Box>
            )
           })}
   </div>
   </div>
  )
}
const Box=styled.div`
cursor:pointer;
width: 60px;
height: 60px;
border: 2px solid black;
display: flex;
justify-content: center;
align-items: center;
background-color:${(props)=>props.isselected ? "black" :"white"};
color:${(props)=>props.isselected ?"white":"black"};
`

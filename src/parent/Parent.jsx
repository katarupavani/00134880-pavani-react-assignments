import React from 'react'
import { useState } from 'react'
import Child from '../child/Child';

export default function Parent() {

    const [a,setA]=useState(0);
    const [b,setB]=useState(0);

    const setAValue=(event)=>{
        setA(Number(event.target.value))
    }

  const setBValue=(event)=>{
    setB(Number(event.target.value))
   }

  return (
    <div>
        <label>Number1:</label>
      <input type="number" onKeyUp={setAValue}/>
      <br></br>
      <label>Number2:</label>
      <input type="number" onKeyUp={setBValue}/>

      <Child a={a} b={b}></Child>
    </div>
  )
}
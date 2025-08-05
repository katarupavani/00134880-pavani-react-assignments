import React from 'react'
import { useState } from 'react';

export default function Child(props) {
    const a=props.a;
    const b=props.b;
    const[res,setRes]=useState(0);

    const calculator=(c)=>{
        let result;
        if(c === '+') 
        {
            result=a+b;
        }
        else if(c === '-'){
            result=a-b;
        }
        else{
            result=a*b;
        }
        setRes(result)

    };

  return (
    <div>
      <input type="button" value="+"  onClick={()=>calculator('+')}/>
      <input type="button" value="-"  onClick={()=>calculator('-')} />
      <input type="button" value="*"  onClick={()=>calculator('*')}/>


      <br></br>
      <div>Result:{res}</div>
    </div>
  )
}
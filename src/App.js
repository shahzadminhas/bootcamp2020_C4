import React, { useState } from 'react';
import Message from './Message.js';
import './App.css';

export default function App(){
  let [count, setCounter]=useState(1);
  let [isMorning, setMorning]=useState(false);

  return(
    <div className={`box ${isMorning ? 'dayLight' : ''}`}>
      <h1>Good {isMorning?'Morning':'Night'}</h1>
      <Message counter={count}/>

      <br />
      <br />

      <button onClick={()=>setCounter(count+1)}>update counter</button>
      <button onClick={()=>setMorning(!isMorning)}>update day</button>
    </div>
  )
}
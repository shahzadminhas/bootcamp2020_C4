import React, { useState } from 'react';
import Message from './Message.js';
import './App.css';

export default function App(){
  let [count, setCounter]=useState(1);
  let [isMorning, setMorning]=useState(false);
  //let [textDirect, setDirection]=useState('left');

  return(
    <div className={`box ${isMorning ? 'dayLight' : ''}`}>
      <h1>Good {isMorning?'Morning':'Night'}</h1>
      <Message counter={count}/>

      <br />
      <br />

      <button onClick={()=>setCounter(count+1)}>Increase counter</button>
      <button onClick={()=>setCounter(count-1)}>Decrease counter</button> <br />
      <button onClick={()=>setMorning(!isMorning)}>update day</button>
      <br />
      <br />

      <br />
      <br />
      Copyright 2020 - Developed by Shahzad Munir Minhas
    </div>
  )
}
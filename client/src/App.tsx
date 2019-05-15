import React, { useState, useEffect } from 'react';
import {useSpring , animated} from 'react-spring' ; 
import openSocket from 'socket.io-client'  ; 
const socket = openSocket('http://0.0.0.0:9000/chat') ; 

const App: React.FC = () => {

  const [msg , setMsg] = useState('') ; 
  const fadein = useSpring({from : {
    opacity : 0 
  } , to : {opacity : 1}}) ;

  return (
    <div className="App">
     <input onChange={e=>setMsg(e.target.value)} type="text"/>
      <button onClick={e=>socket.emit('message', 'hello its me')}>Click</button>
    </div>
  );
}

export default App;
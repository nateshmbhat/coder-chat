import React, { useState, useEffect } from 'react';
import {useSpring , animated} from 'react-spring' ; 
import openSocket from 'socket.io-client'  ; 
import registerCallbacks from './handlers/chat'
import ChatRoom from './components/ChatWindow';

const chatsocket = openSocket('http://0.0.0.0:9000/chat') ; 
registerCallbacks(chatsocket) ; 


const App: React.FC = () => {
  return(
    <div style={{height:'100vh'}}>
      <ChatRoom/>
    </div>
  );
}

export default App ;
import React, { useState, useEffect } from 'react';
import {useSpring , animated} from 'react-spring' ; 
import ChatRoom from './components/ChatWindow';

const App: React.FC = () => {
  return(
    <div style={{height:'100vh'}}>
      <ChatRoom/>
    </div>
  );
}

export default App ;
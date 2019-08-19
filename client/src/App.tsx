import React, { useState, useEffect, Suspense } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import LoginPage from './components/LoginPage/LoginPage';
import { BigLoaderCentered } from './components/Misc';
import { Button } from 'semantic-ui-react';
import { sendGetLiveCodeMapToServer } from './handlers/chat/sender';
import { SocketChannel } from '../../server/src/types/types';
const ChatRoom = React.lazy(()=>import('./components/ChatSection/ChatWindow')) ; 

const App: React.FC = () => {
  return (
    <>
    <Button icon='user' content='click' onClick={()=>{
      sendGetLiveCodeMapToServer() ; 
    }} />
    <Router>
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/chat" exact component={
            ()=>(<Suspense fallback={<BigLoaderCentered/>}>
              <ChatRoom/>
            </Suspense>)
        } />
      </Switch>
    </Router>
    </>
  );
}

export default App
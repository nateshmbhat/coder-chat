import React, { useState, useEffect, Suspense } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import LoginPage from './components/LoginPage/LoginPage';
import { BigLoaderCentered } from './components/Misc';
import { LiveCodePage } from './components/LiveCodePage/LiveCodePage';
const ChatRoom = React.lazy(()=>import('./components/ChatSection/ChatWindow')) ; 

const App: React.FC = () => {
  return (
    <>
    {/*TESTING COMPONENT 

    <Button icon='user' content='click' onClick={()=>{
      sendGetLiveCodeMapToServer() ; 
    }} /> */}
    <div style={{height:'100vh'}}>
    <Router>
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/livecode" exact component={LiveCodePage} />
        <Route path="/chat" exact component={
            ()=>(<Suspense fallback={<BigLoaderCentered/>}>
              <ChatRoom/>
            </Suspense>)
        } />
      </Switch>
    </Router>
</div>
    </>
  );
}

export default App
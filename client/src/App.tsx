import React, { useState, useEffect, Suspense } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import { BigLoaderCentered } from './components/Misc';
const ChatRoom = React.lazy(()=>import('./components/ChatWindow')) ; 

const App: React.FC = () => {
  return (
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
  );
}

export default App
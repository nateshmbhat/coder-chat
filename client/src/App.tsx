import React, { useState, useEffect } from 'react';
import ChatRoom from './components/ChatWindow';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { LoginPage} from './components/LoginBox';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/chat" exact component={ChatRoom} />
      </Switch>
    </Router>
  );
}

export default App
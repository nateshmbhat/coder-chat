import React, { Suspense, useEffect } from 'react';
import 'semantic-ui-css/semantic.min.css' ; 
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { BigLoaderCentered } from './components/Misc';
import { LiveCodePage } from './components/LiveCodePage/LiveCodePage';
import { LoginPage } from './components/LoginPage/LoginPage';
import { useStoreActions } from './store/globalStore';
import { LocalStorageItemNames } from './types/types';
const ChatRoom = React.lazy(()=>import('./components/ChatSection/ChatWindow')) ; 

const App: React.FC = () => {
  const setServerAddress = useStoreActions(a=>a.setServerAddressAndConnect) ; 

  useEffect(() => {
    const address = localStorage.getItem(LocalStorageItemNames.CODER_CHAT_SERVER_ADDRESS) ;  
    if(typeof address === 'string'){
      setServerAddress(address) ; 
    }
  }, [])


  return (
    <>
    {/*TESTING COMPONENT 

    <Button icon='user' content='click' onClick={()=>{
      sendGetLiveCodeMapToServer() ; 
    }} /> */}
    <div style={{height:'100vh'}}>
    <Router>
      <Switch>
        <Route path="/" exact component={LiveCodePage} />
        <Route path="/login" exact component={LoginPage} />
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
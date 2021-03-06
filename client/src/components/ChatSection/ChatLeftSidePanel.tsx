import React from 'react';
import {Colors} from '../../types/types';
import { Button, Icon} from 'semantic-ui-react';
import { useStoreState , useStoreActions } from '../../store/globalStore';


// This is the left panel that runs from top to bottom of the page.
const ChatUsersListPanel = () => {
    const [liveCodePeersToCodeMap , activeLiveCodePeerId] = useStoreState(state =>  [state.liveCodePeersToCodeMap , state.activeLiveCodePeerId]) ;
    const setActiveLiveCodePeer = useStoreActions(actions=>actions.setActiveLiveCodePeer) 

    console.log('rendering ChatLeftPanel') ; 

    const peersComponent = Object.keys(liveCodePeersToCodeMap).map(peerid => {
        let activated = peerid === activeLiveCodePeerId;
        return (
            <div key={peerid} style={{ backgroundColor: activated ? '#16AB39' : 'rgb(131,131,131)' }} >
                <Button key={peerid} toggle active={activated} fluid color='grey' compact onClick={e => activated?setActiveLiveCodePeer(null):setActiveLiveCodePeer(peerid)} >
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Icon size='large' name='user' />
                        <p style={{ fontSize: '1.5em', paddingLeft: '5px' }} >
                            {liveCodePeersToCodeMap[peerid].sendername}
                        </p>
                    </div>
                    <p style={{color: Colors.DARK_GREEN_FOR_CODE_LANGUAGE}}>
                        {liveCodePeersToCodeMap[peerid].language}
                    </p>
                </Button>
            </div>
        );
    })

    return (
        <div style={{
            backgroundColor: '#c4c4c4',
            height:'100vh',
            position:'relative', 
            zIndex:10 , 
            boxShadow: '0.1px -5px 15px black',
        }} >
            {peersComponent}
        </div>
    );
}

export default ChatUsersListPanel
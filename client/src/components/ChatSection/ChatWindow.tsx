import React, { useContext } from 'react';
import  ChatSection from './ChatSection';
import ChatPeersCodePanel from './ChatLeftSidePanel' ; 
import { LocalStorageItemNames, GlobalStoreType, NavLinkPaths } from '../../types/types';
import { useStoreState } from '../../store/globalStore';
import { NavBar } from '../NarBar/NavBar';


const ChatRoom = () => {
    if(localStorage.getItem(LocalStorageItemNames.CODER_CHAT_USER_EMAILID)==null){
        window.location.href='/' ; 
    }
    return (
        <>
        <NavBar navPath={NavLinkPaths.chat} />
        <div style={{height:'100%'}}>
            <div style={{display:'flex'}}>
                <ChatPeersCodePanel />
                <ChatSection/>
            </div>
        </div>
        </>
    );
}

export default ChatRoom ;
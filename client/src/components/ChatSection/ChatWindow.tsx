import React, { useContext } from 'react';
import ChatSendPanel from './ChatSendPanel';
import  ChatSection from './ChatSection';
import ChatLeftPanel from './ChatLeftSidePanel' ; 
import { ChatHeader } from './ChatHeader';
import { LocalStorageItemNames, GlobalStoreType } from '../../types/types';
import { useStoreState } from '../../store/globalStore';


const ChatRoom = () => {

    const totalRows = useStoreState(state=> state.totalRows) ; 

    if(localStorage.getItem(LocalStorageItemNames.CODER_CHAT_USER_EMAILID)==null){
        window.location.href='/' ; 
    }
    return (
        <>
        <div style={{height:'100vh'}}>
            <ChatLeftPanel />
            <ChatSection/>
            <ChatSendPanel/>
        </div>
        </>
    );
}

export default ChatRoom ;
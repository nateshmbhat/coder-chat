import React, { useContext } from 'react';
import ChatSendPanel from './ChatSendPanel';
import  ChatSection from './ChatSection';
import ChatLeftPanel from './ChatLeftSidePanel' ; 
import { ChatHeader } from './ChatHeader';
import { LocalStorageItemNames, GlobalStoreType } from '../types/mytypes';
import { useStoreState } from '../store/globalStore';


const ChatRoom = () => {

    const totalRows = useStoreState(state=> state.totalRows) ; 

    if(localStorage.getItem(LocalStorageItemNames.CODER_CHAT_USER_EMAILID)==null){
        window.location.href='/' ; 
    }
    return (
        <>
            <div style={{
                display: 'grid' ,
                height:'100vh' , 
                gridTemplateColumns  : 'repeat(12,1fr)' , 
                gridTemplateRows  : `repeat(${totalRows},1fr)` , 
            }}>
                <ChatLeftPanel />
                <ChatHeader/>
                <ChatSection/>
                <ChatSendPanel/>
            </div>
        </>
    );
}

export default ChatRoom ;
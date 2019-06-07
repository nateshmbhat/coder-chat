import React, { useContext } from 'react';
import ChatSendPanel from './ChatSendPanel';
import  ChatSection from './ChatSection';
import ChatLeftPanel from './ChatLeftSidePanel' ; 
import { connect } from 'react-redux';
import { ChatHeader } from './ChatHeader';
import { LocalStorageItemNames } from '../types/mytypes';

interface ChatRoomProp{
    totalRows : number 
};

const ChatRoom = (props : ChatRoomProp) => {
    const totalRows = props.totalRows
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



const mapStateToProps = (state:ChatRoomProp)=>{
    return {
        totalRows : state.totalRows 
    }
}

export default connect(mapStateToProps)(ChatRoom) ;
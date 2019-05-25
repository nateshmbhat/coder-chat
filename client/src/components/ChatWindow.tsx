import React, { useContext } from 'react';
import ChatSendPanel from './ChatSendPanel';
import  ChatSection from './ChatSection';
import ContactsSection from './ContactsPanel' ; 
import { connect } from 'react-redux';
import { ChatHeader } from './ChatHeader';

interface ChatRoomProp{
    totalRows : number 
};

const ChatRoom = (props : ChatRoomProp) => {
    const totalRows = props.totalRows
    return (
        <>
            <div style={{
                display: 'grid' ,
                height:'100%' , 
                gridTemplateColumns  : 'repeat(12,1fr)' , 
                gridTemplateRows  : `repeat(${totalRows},1fr)` , 
            }}>
                <ContactsSection />
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
import React, { useContext } from 'react';
import { ChatMessage } from './ChatMessage';
import ChatSendPanel from './ChatSendPanel';
import globalContext from '../store/globalContext';


const ChatRoom = () => {
    const totalRows = useContext(globalContext).totalRows ; 
    return (
        <>
            <div style={{
                display: 'grid' ,
                height:'100%' , 
                gridTemplateColumns  : 'repeat(12,1fr)' , 
                gridTemplateRows  : `repeat(${totalRows},1fr)` , 
            }}>
                <ContactsSection />
                <ChatHeader />
                <ChatSection/>
                <ChatSendPanel/>
            </div>
        </>
    );
}

const ContactsSection: React.FC = () => {

    const totalRows = useContext(globalContext).totalRows ; 
    return (
        <div style={{ 
            backgroundColor: '#c4c4c4', 
            zIndex :10 , 
            gridColumn: '1 / 3' , 
            boxShadow:'0.1px -15px 15px black' , 
            gridRow:`1 / ${totalRows+1}` 
            }} >
        </div>
    );
}

const ChatHeader: React.FC = () => {
    const totalRows = useContext(globalContext).totalRows ; 
    return (
        <div style={{ 
                background: 'linear-gradient(#8E8DE5 , #6B7CD7)' , 
                zIndex :9 , 
                boxShadow:'0.1px 0.1px 5px black' , 
                gridColumn : '3 / 13' ,
                // gridRow:'1 / 3'  ,
                height:'50px'
            }} >
        </div>
    );
}

const ChatSection: React.FC = () => {
    const totalRows = useContext(globalContext).totalRows ; 
    return (
        <div style={{ 
                backgroundColor: '#5A657B' , 
                overflowY:'scroll' , 
                gridColumn:'3 / 13' , 
                gridRow:`2 / ${totalRows+1}` 
        }} >

        </div>
    );
}

export default ChatRoom ;
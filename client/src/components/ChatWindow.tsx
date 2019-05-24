import React, { useContext } from 'react';
import ChatSendPanel from './ChatSendPanel';
import  ChatSection from './ChatSection';
import ContactsSection from './ContactsPanel' ; 
import { connect } from 'react-redux';

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
                <ChatHeader />
                <ChatSection/>
                <ChatSendPanel/>
            </div>
        </>
    );
}

const ChatHeader: React.FC = () => {
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


const mapStateToProps = (state:ChatRoomProp)=>{
    return {
        totalRows : state.totalRows 
    }
}

export default connect(mapStateToProps)(ChatRoom) ;
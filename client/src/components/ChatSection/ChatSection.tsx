import React, { Suspense } from 'react' ; 
import { ChatMessage } from "./ChatMessage";
import { useStoreState } from '../../store/globalStore';
import ChatSendPanel from './ChatSendPanel';

const ChatSection =()=> {
    const [chatMessages ,myUserEmail ] = useStoreState((state)=>[ state.chatMessages , state.myUserEmail])

    const chatMessagesComponent = chatMessages.map((chat,idx)=>{
        console.log('props.myUserEmail = ' , myUserEmail , ' chat.senderid = ' , chat.senderid) ; 
        return(
            <ChatMessage key={idx} msg={chat.msg} sender={chat.sendername} time={chat.time} isMyMessage={myUserEmail==chat.senderid} />
        );
    })

    return (
        <>
        <div style={{ 
            backgroundColor: '#5A657B' , 
            overflowY:'scroll' , 
            position:'relative',
            width:'100%',
            height:'100%',
        }} >
        <ChatSendPanel/>

        {
            chatMessagesComponent
        }

        </div>
        </>
    );
}


export default ChatSection ; 
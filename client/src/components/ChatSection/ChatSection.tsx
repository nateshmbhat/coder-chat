import React, { Suspense } from 'react' ; 
import { ChatMessage } from "./ChatMessage";
import { ChatMessageType, GlobalStoreType } from '../../types/types';
import { BigLoaderCentered } from "../Misc";
import { useStoreState } from '../../store/globalStore';
import ChatSendPanel from './ChatSendPanel';
const LiveCodeEditor = React.lazy(()=> import("../LiveCodePage/LiveCodeEditor"))  ;


const ChatSection =()=> {
    const [chatMessages ,myUserId ] = useStoreState((state)=>[ state.chatMessages , state.myUserId])

    const chatMessagesComponent = chatMessages.map((chat,idx)=>{
        console.log('props.myuserid = ' , myUserId , ' chat.senderid = ' , chat.senderid) ; 
        return(
            <ChatMessage key={idx} msg={chat.msg} sender={chat.sendername} time={chat.time} isMyMessage={myUserId==chat.senderid} />
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
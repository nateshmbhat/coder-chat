import React, { Suspense } from 'react' ; 
import { ChatMessage } from "./ChatMessage";
import { ChatMessageType, GlobalStoreType } from '../../types/types';
import { BigLoaderCentered } from "../Misc";
import { useStoreState } from '../../store/globalStore';
const LiveCodeEditor = React.lazy(()=> import("../LiveCodeEditor"))  ;



const ChatSection =()=> {
    const [totalRows ,chatMessages ,myUserId , liveCodingOpen] = useStoreState((state)=>[state.totalRows , state.chatMessages , state.myUserId , state.liveCodingOpen])

    const chatMessagesComponent = chatMessages.map((chat,idx)=>{
        console.log('props.myuserid = ' , myUserId , ' chat.senderid = ' , chat.senderid) ; 
        return(
            <ChatMessage key={idx} msg={chat.msg} sender={chat.sendername} time={chat.time} isMyMessage={myUserId==chat.senderid} />
        );
    })

    return (
        <div style={{ 
                backgroundColor: '#5A657B' , 
                overflowY:'scroll' , 
                position:'relative',
                gridColumn:'3 / 13' , 
                gridRow:`2 / ${totalRows+1}` 
        }} >
        

        {
            liveCodingOpen &&
            <Suspense fallback={ <BigLoaderCentered inverted={true}/> }>
                <LiveCodeEditor/>
            </Suspense> || 
            chatMessagesComponent
        }

        </div>
    );
}


export default ChatSection ; 
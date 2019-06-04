import { connect } from "react-redux";
import React, { Suspense } from 'react' ; 
import { ChatMessage } from "./ChatMessage";
import { ChatMessage as ChatMessageType } from "../types/mytypes";
import { BigLoaderCentered } from "./Misc";
const LiveCodeEditor = React.lazy(()=> import("./LiveCodeEditor"))  ;

interface ChatSectionStateProp{
    totalRows : number  ,
    chatMessages : ChatMessageType[]
    myUserId : string , 
    myUserName : string , 
    liveCodingOpen : boolean  , 
    liveCodeText : string,
}

const ChatSection: React.FC<ChatSectionStateProp> = (props) => {
    const totalRows = props.totalRows

    const chatMessages = props.chatMessages.map((chat,idx)=>{

        console.log('props.myuserid = ' , props.myUserId , ' chat.senderid = ' , chat.senderid) ; 
        return(
            <ChatMessage key={idx} msg={chat.msg} sender={chat.sendername} time={chat.time} isMyMessage={props.myUserId==chat.senderid} />
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
            props.liveCodingOpen &&
            <Suspense fallback={ <BigLoaderCentered inverted={true}/> }>
                <LiveCodeEditor/>
            </Suspense> || 
            chatMessages
        }

        </div>
    );
}

const mapStateToProps = (state:ChatSectionStateProp)=>({
    totalRows : state.totalRows , 
    chatMessages : state.chatMessages , 
    myUserId : state.myUserId , 
    myUserName : state.myUserName  , 
    liveCodingOpen: state.liveCodingOpen , 
    liveCodeText : state.liveCodeText , 
});

export default connect(mapStateToProps)(ChatSection) ; 
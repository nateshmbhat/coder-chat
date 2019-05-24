enum SocketEvents{
    CHATMESSAGE = 'chat-message', 
    LIVECODEMESSAGE = 'live-code-message'
};

interface ChatMessageReceiveBody_{
    senderid : string , 
    sendername? : string  , 
    msg : string
};

interface ChatMessageSendingBody_{ // This is how the message object should be sent
    sendername : string  , 
    msg : string
};

interface ChatMessage_ { // data to be stored in redux store
    senderid : string , 
    sendername : string , 
    msg : string , 
    time : Date ,
    sessionid : string 
};

interface SessionType_{
    id : string , 
    date :Date
}


export type ChatMessageReceiveBody = ChatMessageReceiveBody_ ;
export type ChatMessageSendingBody = ChatMessageSendingBody_;
export type ChatMessage = ChatMessage_ ;
export type SessionType =  SessionType_;
export {SocketEvents as ChatEvents} ; 
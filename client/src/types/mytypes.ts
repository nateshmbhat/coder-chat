enum SocketEvents{
    CHATMESSAGE = 'chat-message', 
    LIVECODEMESSAGE = 'live-code-message'
};

export interface ChatMessageReceiveBody{
    senderid : string , 
    sendername? : string  , 
    msg : string
};

export interface ChatMessageSendingBody{ // This is how the message object should be sent
    senderid : string,
    sendername : string  , 
    msg : string
};

export interface ChatMessage { // data to be stored in redux store
    senderid : string , 
    sendername : string , 
    msg : string , 
    time : Date ,
    sessionid : string 
};

export interface SessionType{
    id : string , 
    date :Date
}


export {SocketEvents as ChatEvents} ; 
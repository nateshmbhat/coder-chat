enum ChatEvents{
    CHATMESSAGE = 'chat-message', 
    LIVECODEMESSAGE = 'live-code-message'
};

interface ChatMessageSendingBody{
    senderSocketId : string, 
    senderid : string , 
    sendername : string  , 
    msg : string
}

interface ChatMessageReceiveBody{
    senderid : string
    sendername : string  , 
    msg : string
}

export {ChatEvents , ChatMessageSendingBody , ChatMessageReceiveBody} ; 


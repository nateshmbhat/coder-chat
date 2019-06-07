enum ChatEvents{
    CHATMESSAGE = 'chat-message', 
    LIVECODETEXT= 'live-code-text'
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


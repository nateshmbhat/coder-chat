enum ChatEvents{
    CHATMESSAGE = 'chat-message', 
    LIVECODEMESSAGE = 'live-code-message'
};

interface ChatMessageSendingBody{
    senderid : string , 
    sendername : string  , 
    msg : string
}

interface ChatMessageReceiveBody{
    sendername : string  , 
    msg : string
}

export {ChatEvents , ChatMessageSendingBody , ChatMessageReceiveBody} ; 


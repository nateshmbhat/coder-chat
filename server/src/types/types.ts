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

interface MessageReceiveBody{
    senderid : string
    sendername : string  , 
    msg : string
}

interface LiveMessageType extends MessageReceiveBody{
    language : string
}

export {ChatEvents , ChatMessageSendingBody , MessageReceiveBody as ChatMessageReceiveBody , LiveMessageType} ; 
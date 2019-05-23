enum ChatEvents{
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

export type ChatMessageReceiveBody = ChatMessageReceiveBody_ ;
export type ChatMessageSendingBody = ChatMessageSendingBody_;
export {ChatEvents} ; 
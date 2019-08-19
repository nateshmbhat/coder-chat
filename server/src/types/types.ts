
enum SocketChannels {
    CHATMESSAGE = 'chat-message',
    LIVECODETEXT = 'live-code-text' , 
    GET_LIVE_CODE_MAPPING = 'get-live-code-mapping', 
};

export enum ReduxActionTypes{
    ADD_CONNECTED_CLIENT ='add-connected-client' , 
    REMOVE_DISCONNECTED_CLIENT='remove-disconnected-client' ,
    UPDATE_LIVECODE_MAPPING='update-livecode-mapping'
};


interface ChatMessageSendingBody {
    senderSocketId: string,
    senderid: string,
    sendername: string,
    msg: string
}

interface MessageReceiveBody {
    senderid: string
    sendername: string,
    msg: string
}

interface LiveMessageType extends MessageReceiveBody {
    language: string
}


export interface ConnectedClient {
    socketid: string
}

export interface ChatMessageType { // data to be stored in redux store
    senderid: string,
    sendername: string,
    msg: string,
    time: Date,
    sessionid: string
};

export interface LiveCodePeerToCodeObject extends LiveMessageType { 
    language : string
}

export interface LiveCodePeerToCodeMap  {
    [key:string] : LiveCodePeerToCodeObject
}


interface StoreType {
    connectedClients: ConnectedClient[] , 
    liveCodePeersToCodeMap: LiveCodePeerToCodeMap,
}

export { SocketChannels as SocketChannel, ChatMessageSendingBody, MessageReceiveBody as ChatMessageReceiveBody, LiveMessageType, StoreType }; 
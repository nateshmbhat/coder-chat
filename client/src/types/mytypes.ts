enum SocketEvents {
    CHATMESSAGE = 'chat-message',
    LIVECODETEXT = 'live-code-text'
};

const ACE_EDITOR_LANGUAGES = [ "java","c_cpp", "javascript", "python", "html"];
  
const ACE_EDITOR_THEMES = [ "monokai", "github", "tomorrow", "kuroir", "twilight", "xcode", "textmate", "solarized_dark", "solarized_light", "terminal" ];


enum LocalStorageItemNames { //this is used to store data locally in localstorage with either of the following enumerations.
    CODER_CHAT_USER_NAME = 'coder-chat-user-name'  ,
    CODER_CHAT_USER_EMAILID = 'coder-chat-user-email'
}

export interface LiveCodePeerMessage extends ChatMessageType{
    language: string;
};
export interface GlobalStateType {
    totalRows: number,
    serverConnection: boolean,
    internetAccess: boolean,
    sessions: SessionType[],
    chatMessages: ChatMessageType[],
    myUserId: string,
    myUsername: string,
    liveCodingOpen: boolean,
    liveCodeText: string,
    liveCodePeersMap : senderToLiveCodeMap ,
    activeLiveCodePeerId : string|null
}

export interface senderToLiveCodeMap{
    [key:string] : LiveCodePeerMessage
}


export interface MessageReceiveBody {
    senderid: string,
    sendername?: string,
    msg: string
};

export interface ChatMessageSendingBody { // This is how the message object should be sent
    senderid: string,
    sendername: string,
    msg: string
};

export interface ChatMessageType { // data to be stored in redux store
    senderid: string,
    sendername: string,
    msg: string,
    time: Date,
    sessionid: string
};

export interface SessionType {
    id: string,
    date: Date
}

export { SocketEvents as ChatEvents , ACE_EDITOR_LANGUAGES ,ACE_EDITOR_THEMES , LocalStorageItemNames }; 
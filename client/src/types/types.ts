import { Action } from 'easy-peasy' ;
import { LiveCodePeerToCodeObject } from '../../../server/src/types/types';

enum SocketChannel {
    CHATMESSAGE = 'chat-message',
    LIVECODETEXT = 'live-code-text' , 
    GET_LIVE_CODE_MAPPING = 'get-live-code-mapping', 
};

const ACE_EDITOR_LANGUAGES = [ "java","c_cpp", "javascript", "python", "html"];
  
const ACE_EDITOR_THEMES = [ "monokai", "github", "tomorrow", 'tomorrow_night_blue','pastel_on_dark','merbivore','dracula','cobalt','clouds','chaos','ambiance', "kuroir", "twilight", "xcode", "textmate", "solarized_dark", "solarized_light", "terminal" ];

export enum MessageTypes {
    error='error' , 
    warning='warning' , 
    info='info'
}

export enum NavLinkPaths {
    home = '/' , 
    login= '/login' , 
    livecode = '/livecode' , 
    chat = '/chat' , 
}


enum LocalStorageItemNames { //this is used to store data locally in localstorage with either of the following enumerations.
    CODER_CHAT_USER_NAME = 'coder-chat-user-name'  ,
    CODER_CHAT_USER_EMAILID = 'coder-chat-user-email'
}

enum Colors{
    DARK_GREEN_FOR_CODE_LANGUAGE = 'gainsboro' , 
    CHAT_HEADER_PURPLE = 'linear-gradient(rgb(142, 141, 229), rgb(107, 124, 215))' , 
    LEFT_PANEL_GREY = '#001100' , 
}

export interface LiveCodePeerMessage extends ChatMessageType{
    language: string;
};

export interface GlobalStoreType {
    serverAddress: string , 
    socketioSocket :  SocketIOClient.Socket , 
    serverConnectedFlag: boolean,
    internetAccess: boolean,
    sessions: SessionType[],
    chatMessages: ChatMessageType[],
    myUserId: string,
    myUsername: string,
    liveCodeText: string,
    liveCodePeersToCodeMap : senderToLiveCodeMap ,
    activeLiveCodePeerId : string|null  , 


    updateLiveCodePeersToCodeMap  : Action<GlobalStoreType , LiveCodePeerToCodeObject > , 
    setInternetAccess : Action<GlobalStoreType,boolean> , 
    setActiveLiveCodePeer: Action<GlobalStoreType,string|null> , 
    setServerConnectedFlag: Action<GlobalStoreType,boolean> , 
    addChatMessage: Action<GlobalStoreType,ChatMessageType> , 
    setUsername: Action<GlobalStoreType,string> , 
    setServerAddress: Action<GlobalStoreType,string> , 
    setUserId: Action<GlobalStoreType,string> , 
    setLiveCodeText : Action<GlobalStoreType,string> , 
    addLiveCodePeer : Action<GlobalStoreType,LiveCodePeerMessage>
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

export { SocketChannel , ACE_EDITOR_LANGUAGES ,ACE_EDITOR_THEMES , LocalStorageItemNames  , Colors}; 
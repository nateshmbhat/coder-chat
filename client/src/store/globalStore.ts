import { GlobalStoreType, LocalStorageItemNames } from '../types/types';
import { action , createStore , createTypedHooks } from 'easy-peasy';
import { getSessionId } from '../Utils/utils';
import openSocket from 'socket.io-client';
import registerCallbacks from '../handlers/chat/callbacks';

const initialState: GlobalStoreType = {
    serverAddress:'192.168.0.100:9000', 
    socketioSocket : openSocket('192.168.0.100:9000') , 
    internetAccess: false,
    serverConnectedFlag: false,
    sessions: [{id : 'randomoijoijfd' , date : new Date()}],
    chatMessages: [],
    myUserId: localStorage.getItem(LocalStorageItemNames.CODER_CHAT_USER_EMAILID ) || String((Math.random())) ,
    myUsername: localStorage.getItem(LocalStorageItemNames.CODER_CHAT_USER_NAME) || 'Anonymous' ,
    liveCodeText: '',
    liveCodePeersToCodeMap: {},//{myid  : {senderid:'myid' , time : (new Date())  , language :'java' , msg:'int i = 0 ;', sendername:'anonymous' , sessionid:'anonymous'}} , 
    activeLiveCodePeerId : null , 

// Actions 
    updateLiveCodePeersToCodeMap : action((state,obj)=>{
        state.liveCodePeersToCodeMap[obj.senderid] = {...obj , time : new Date() , sessionid : getSessionId() }  ; 
    })  , 
    setActiveLiveCodePeer : action((state,peerid)=>{state.activeLiveCodePeerId = peerid ; }) , 
    setInternetAccess : action((state,flag)=>{state.internetAccess = flag ; }) ,
    setLiveCodeText : action((state,text)=>{state.liveCodeText = text}) , 
    setServerAddress: action((state,address)=>{
        state.serverAddress = address ; 
        if(state.socketioSocket.connected)
        {
            state.socketioSocket.disconnect().removeAllListeners()
        }
        state.socketioSocket = openSocket(address);
        registerCallbacks(state.socketioSocket)
    }) , 
    setServerConnectedFlag: action((state,flag)=>{state.serverConnectedFlag = flag}) , 
    setUserId: action((state,id)=>{state.myUserId= id}) , 
    setUsername: action((state,name)=>{state.myUsername= name}) , 
    addChatMessage: action((state,chat)=>{state.chatMessages.push(chat)}) , 
    addLiveCodePeer : action((state,peer)=>{state.liveCodePeersToCodeMap[peer.senderid] = peer}) , 
}

registerCallbacks(initialState.socketioSocket) ; 

const globalStore = createStore(initialState) ; 
// Provide our model to the helper      👇
const typedHooks = createTypedHooks<GlobalStoreType>();

// 👇 export the typed hooks
export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;

export {globalStore }; 
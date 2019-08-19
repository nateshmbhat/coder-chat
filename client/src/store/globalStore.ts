import { GlobalStoreType, LocalStorageItemNames } from '../types/types';
import { action , createStore , createTypedHooks } from 'easy-peasy';
import { getSessionId } from '../Utils/utils';

const initialState: GlobalStoreType = {
    serverIp:'192.168.0.100' , 
    serverPort:9000, 
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
    setServerConnectedFlag: action((state,flag)=>{state.serverConnectedFlag = flag}) , 
    setUserId: action((state,id)=>{state.myUserId= id}) , 
    setUsername: action((state,name)=>{state.myUsername= name}) , 
    addChatMessage: action((state,chat)=>{state.chatMessages.push(chat)}) , 
    addLiveCodePeer : action((state,peer)=>{state.liveCodePeersToCodeMap[peer.senderid] = peer}) , 
}

const globalStore = createStore(initialState) ; 
// Provide our model to the helper      👇
const typedHooks = createTypedHooks<GlobalStoreType>();

// 👇 export the typed hooks
export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;

export {globalStore }; 
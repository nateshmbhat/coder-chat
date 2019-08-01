import { GlobalStoreType, LocalStorageItemNames } from '../types/mytypes';
import { action , createStore , createTypedHooks } from 'easy-peasy';

const initialState: GlobalStoreType = {
    totalRows: Math.ceil(window.innerHeight / 20),
    internetAccess: false,
    serverConnectedFlag: false,
    sessions: [{id : 'randomoijoijfd' , date : new Date()}],
    chatMessages: [],
    myUserId: localStorage.getItem(LocalStorageItemNames.CODER_CHAT_USER_EMAILID ) || String((Math.random())) ,
    myUsername: localStorage.getItem(LocalStorageItemNames.CODER_CHAT_USER_NAME) || 'Anonymous' ,
    liveCodingOpen: false,
    liveCodeText: '',
    liveCodePeersMap: {},//{myid  : {senderid:'myid' , time : (new Date())  , language :'java' , msg:'int i = 0 ;', sendername:'anonymous' , sessionid:'anonymous'}} , 
    activeLiveCodePeerId : null , 

// Actions 

    setActiveLiveCodePeer : action((state,peerid)=>{state.activeLiveCodePeerId = peerid ; }) , 
    setInternetAccess : action((state,flag)=>{state.internetAccess = flag ; }) ,
    setLiveCodeText : action((state,text)=>{state.liveCodeText = text}) , 
    setServerConnectedFlag: action((state,flag)=>{state.serverConnectedFlag = flag}) , 
    setUserId: action((state,id)=>{state.myUserId= id}) , 
    setUsername: action((state,name)=>{state.myUsername= name}) , 
    addChatMessage: action((state,chat)=>{state.chatMessages.push(chat)}) , 
    toggleLiveCodeEditor : action((state)=>{ state.liveCodingOpen = !state.liveCodingOpen}) , 
    addLiveCodePeer : action((state,peer)=>{state.liveCodePeersMap[peer.senderid] = peer}) , 
}

const globalStore = createStore(initialState) ; 
// Provide our model to the helper      👇
const typedHooks = createTypedHooks<GlobalStoreType>();

// 👇 export the typed hooks
export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;

export {globalStore }; 
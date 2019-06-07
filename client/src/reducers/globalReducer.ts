import { Reducer, AnyAction } from "redux";
import { SessionType, ChatMessageType, GlobalStateType, LiveCodePeerMessage, senderToLiveCodeMap } from '../types/mytypes';
import { ActionType } from "../types/reducerTypes";


const initialState: GlobalStateType = {
    totalRows: Math.ceil(window.innerHeight / 20),
    internetAccess: false,
    serverConnection: false,
    sessions: [],
    chatMessages: [],
    myUserId: 'Anonymous',
    myUsername: 'Anonymous',
    liveCodingOpen: true,
    liveCodeText: '',
    liveCodePeers:{myid  : {senderid:'myid' , language :'java' , msg:'int i = 0 ;'}} , 
    activeLiveCodePeerId : null
}

initialState.sessions.push({
    id: 'dslkfjs',
    date: new Date()
})

const globalReducer: Reducer = (state: GlobalStateType = initialState, action: AnyAction) => {

    switch (action.type) {
        case ActionType.SET_INTERNET_ACCESS:
            return {
                ...state,
                internetAccess: action.payload as boolean
            }

        case ActionType.SET_SERVER_CONN:
            return {
                ...state,
                serverConnection: action.payload as boolean
            }
        case ActionType.ADD_CHAT_MESSAGE:
            return {
                ...state,
                chatMessages: [...state.chatMessages, action.payload as ChatMessageType]
            }
        case ActionType.SET_USERNAME:
            return {
                ...state,
                myUsername: action.payload as string
            }

        case ActionType.SET_USERID:
            return {
                ...state,
                myUserId: action.payload as string
            }

        case ActionType.TOGGLE_LIVECODE_EDITOR:
            return {
                ...state,
                liveCodingOpen : !state.liveCodingOpen
            }

        case ActionType.SET_LIVECODE_TEXT : 
            
            return {
                ...state,
                liveCodeText : action.payload as string
            }


        case ActionType.SET_ACTIVE_LIVECODE_PEER: 
            return {
                ...state,
                activeLiveCodePeerId : action.payload as string | null
            }

        case ActionType.ADD_LIVECODE_PEER:
            {
                let payload : LiveCodePeerMessage = action.payload ; 
                let newLiveCodePeers = {...state.liveCodePeers} ; 
                newLiveCodePeers[payload.senderid] = payload ; 
                return {
                    ...state,
                    liveCodePeers : newLiveCodePeers
                }
            }
            
    }
    return state;
}

export { globalReducer }; 
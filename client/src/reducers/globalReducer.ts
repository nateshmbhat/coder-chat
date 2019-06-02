import { Reducer, AnyAction } from "redux";
import {SessionType, ChatMessage} from '../types/mytypes' ; 
import { ActionType } from "../types/reducerTypes";

export interface GlobalStateType {
    totalRows : number , 
    serverConnection : boolean , 
    internetAccess : boolean , 
    sessions : SessionType[] , 
    chatMessages : ChatMessage[] , 
    myUserId : string ,
    myUsername : string 
}

const initialState : GlobalStateType = {
    totalRows  :  Math.ceil(window.innerHeight/20) , 
    internetAccess : false ,
    serverConnection : false , 
    sessions : [] , 
    chatMessages : [{msg:'hello its me', sendername:'Natesh' , senderid:'nateshmbhat',sessionid: Date() , time : new Date()}],
    myUserId : 'nateshmbhat' , 
    myUsername : 'Natesh'
}

initialState.sessions.push({
    id : 'dslkfjs' , 
    date :new Date()
})

const globalReducer : Reducer  = (state : GlobalStateType = initialState , action: AnyAction)=>{

    switch(action.type){
        case ActionType.SET_INTERNET_ACCESS :
            return {
                ...state , 
                internetAccess : action.payload as boolean
            }
        
        case ActionType.SET_SERVER_CONN : 
            return{
                ...state , 
                serverConnection : action.payload as boolean
            }
        case ActionType.ADD_CHAT_MESSAGE : 
            return {
                ...state , 
                chatMessages : [...state.chatMessages , action.payload as ChatMessage ]
            }
        case ActionType.SET_USERNAME : 
            return {
                ...state , 
                myUsername:action.payload as string 
            }

        case ActionType.SET_USERID: 
            return {
                ...state , 
                myUserId:action.payload as string 
            }
    }
    return state ; 
}

export {globalReducer } ; 
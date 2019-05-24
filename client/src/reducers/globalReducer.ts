import { Reducer, AnyAction } from "redux";
import {SessionType, ChatMessage} from '../types/mytypes' ; 
import { ActionType } from "../types/reducerTypes";

export interface GlobalStateType {
    totalRows : number , 
    serverConnection : boolean , 
    internetAccess : boolean , 
    sessions : SessionType[] , 
    chatMessages : ChatMessage[]
}

const initialState : GlobalStateType = {
    totalRows  :  Math.ceil(window.innerHeight/20) , 
    internetAccess : false ,
    serverConnection : false , 
    sessions : [] , 
    chatMessages : [],
}

initialState.sessions.push({
    id : 'dslkfjs' , 
    date :new Date()
})

const globalReducer : Reducer  = (state = initialState , action: AnyAction)=>{

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
    }
    return state ; 
}

export {globalReducer } ; 
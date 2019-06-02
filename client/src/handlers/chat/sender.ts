import { chatsocket, initChatSocket } from "./chatInit";
import { ChatEvents, ChatMessage } from "../../types/mytypes";
import { globalStore } from "../../store/globalStore";
import { GlobalStateType } from "../../reducers/globalReducer";

import { ActionType } from "../../types/reducerTypes";
initChatSocket() ;

const sendChatMessage=(msgString:string)=>{

   if(msgString.length==0) return ;  //reject empty messages

   const globalState : GlobalStateType = globalStore.getState() ; 

   const date = new Date() ; 
   const sessionId = `${date.getDate()}${date.getMonth()}${date.getFullYear()}`

   const chat : ChatMessage= {msg:msgString, senderid : globalState.myUserId , sendername : globalState.myUsername, sessionid : sessionId ,time : new Date() }
   globalStore.dispatch({type:ActionType.ADD_CHAT_MESSAGE , payload : chat })


   console.log('sending message to server : ' , chat );
   chatsocket.emit( ChatEvents.CHATMESSAGE , chat  )  ; 
}

export {sendChatMessage} ; 
import { chatsocket, initChatSocket } from "./chatInit";
import { ChatEvents, ChatMessageType, GlobalStateType, LiveCodePeerMessage } from "../../types/mytypes";
import { globalStore } from "../../store/globalStore";

import { ActionType } from "../../types/reducerTypes";
initChatSocket() ;

const sendChatMessage=(msgString:string)=>{

   if(msgString.length==0) return ;  //reject empty messages

   const globalState : GlobalStateType = globalStore.getState() ; 

   const date = new Date() ; 
   const sessionId = `${date.getDate()}${date.getMonth()}${date.getFullYear()}`

   const chat : ChatMessageType= {msg:msgString, senderid : globalState.myUserId , sendername : globalState.myUsername, sessionid : sessionId ,time : new Date() }
   globalStore.dispatch({type:ActionType.ADD_CHAT_MESSAGE , payload : chat })


   console.log('sending message to server : ' , chat );
   chatsocket.emit( ChatEvents.CHATMESSAGE , chat  )  ; 
}


const sendLiveCodeText=(codeString:string , language : string)=>{// sends the codeString to the server to be broadcast
   if(codeString.length==0) return ;  //reject empty messages

   const globalState : GlobalStateType = globalStore.getState() ; 

   const date = new Date() ; 
   const sessionId = `${date.getDate()}${date.getMonth()}${date.getFullYear()}`

   const message : LiveCodePeerMessage = {msg:codeString, senderid : globalState.myUserId , sendername : globalState.myUsername, sessionid : sessionId ,time : new Date() , language:language }

   console.log('sending message to server : ' , message );
   chatsocket.emit( ChatEvents.LIVECODETEXT, message  )  ; 
}


export {sendChatMessage , sendLiveCodeText} ; 
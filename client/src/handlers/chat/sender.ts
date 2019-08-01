import { chatsocket, initChatSocket } from "./chatInit";
import { ChatEvents, ChatMessageType, GlobalStoreType, LiveCodePeerMessage } from "../../types/mytypes";
import { globalStore } from "../../store/globalStore";

initChatSocket() ;

const sendChatMessage=(msgString:string)=>{

   if(msgString.length==0) return ;  //reject empty messages

   const storeState = globalStore.getState()
   const storeActions = globalStore.getActions() ; 

   const date = new Date() ; 
   const sessionId = `${date.getDate()}${date.getMonth()}${date.getFullYear()}`

   const chat : ChatMessageType= {msg:msgString, senderid : storeState.myUserId , sendername : storeState.myUsername, sessionid : sessionId ,time : new Date() }
   storeActions.addChatMessage(chat) ; 

   console.log('sending message to server : ' , chat );
   chatsocket.emit( ChatEvents.CHATMESSAGE , chat  )  ; 
}


const sendLiveCodeText=(codeString:string , language : string)=>{// sends the codeString to the server to be broadcast
   if(codeString.length==0) return ;  //reject empty messages

   const storeState = globalStore.getState()

   const date = new Date() ; 
   const sessionId = `${date.getDate()}${date.getMonth()}${date.getFullYear()}`

   const message : LiveCodePeerMessage = {msg:codeString, senderid : storeState.myUserId , sendername : storeState.myUsername, sessionid : sessionId ,time : new Date() , language:language }

   console.log('sending message to server : ' , message );
   chatsocket.emit( ChatEvents.LIVECODETEXT, message  )  ; 
}


export {sendChatMessage , sendLiveCodeText} ; 
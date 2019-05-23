import { chatsocket, initChatSocket } from "./chat";
import { ChatEvents, ChatMessageSendingBody } from "../../types/mytypes";
initChatSocket() ;

const sendChatMessage=(msg:ChatMessageSendingBody)=>{
   console.log('sending message to server : ' , msg);
   chatsocket.emit( ChatEvents.CHATMESSAGE , msg )  ; 
}

export {sendChatMessage} ; 
import { chatsocket, initChatSocket } from "./chat";
initChatSocket() ;

enum EVENTS {
    CHATMESSAGE = 'chat-message' 
};

const sendChatMessage=(msg:string)=>{
   console.log('sending message to server : ' , msg);
   chatsocket.emit( EVENTS.CHATMESSAGE , msg )  ; 
}

export {sendChatMessage} ; 
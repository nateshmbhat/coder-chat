import { SocketChannel, ChatMessageType, GlobalStoreType, LiveCodePeerMessage } from "../../types/types";
import { globalStore } from "../../store/globalStore";
import { getSessionId } from '../../Utils/utils';

const sendChatMessage=(msgString:string)=>{

   if(msgString.length==0) return ;  //reject empty messages

   const storeState = globalStore.getState()
   const storeActions = globalStore.getActions() ; 

   const chat : ChatMessageType= {msg:msgString, senderid : storeState.myUserEmail , sendername : storeState.myUsername, sessionid : getSessionId(),time : new Date() }
   storeActions.addChatMessage(chat) ; 

   console.log('sending message to server : ' , chat );
   storeState.socketioSocket.emit( SocketChannel.CHATMESSAGE , chat  )  ; 
}


const sendLiveCodeText=(codeString:string , language : string)=>{// sends the codeString to the server to be broadcast
   if(codeString.length==0) return ;  //reject empty messages

   const storeState = globalStore.getState()

   const message : LiveCodePeerMessage = {msg:codeString, senderid : storeState.myUserEmail , sendername : storeState.myUsername, sessionid : getSessionId(),time : new Date() , language:language }

   console.log('sending message to server : ' , message );
   storeState.socketioSocket.emit( SocketChannel.LIVECODETEXT, message  )  ; 
}

const sendGetLiveCodeMapToServer= ()=>{
   globalStore.getState().socketioSocket.emit(SocketChannel.GET_LIVE_CODE_MAPPING)  ; 
}


export {sendChatMessage , sendLiveCodeText , sendGetLiveCodeMapToServer} ; 
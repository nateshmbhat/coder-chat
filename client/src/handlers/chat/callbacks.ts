import { ChatEvents, ChatMessageReceiveBody, ChatMessage} from "../../types/mytypes";
import { ActionType } from "../../types/reducerTypes";
import { globalStore } from "../../store/globalStore";

const registerCallbacks = (sock : SocketIOClient.Socket )=>{
    console.log('Registering Callbacks... ');

    sock.on(ChatEvents.CHATMESSAGE , (msgObject:ChatMessageReceiveBody)=>{
      console.log("message from server : " , msgObject ) ; 

      const date = new Date() ; 
      const sessionId = `${date.getDate()}${date.getMonth()}${date.getFullYear()}`

      const chat : ChatMessage = {msg:msgObject.msg , senderid : msgObject.senderid , sendername : msgObject.sendername || msgObject.senderid , sessionid : sessionId ,time : new Date()  }

      globalStore.dispatch({type:ActionType.ADD_CHAT_MESSAGE , payload : chat })

    })
}    



export default registerCallbacks ;
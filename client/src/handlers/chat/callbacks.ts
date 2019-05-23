import { ChatEvents, ChatMessageReceiveBody} from "../../types/mytypes";

const registerCallbacks = (sock : SocketIOClient.Socket )=>{
    sock.on( ChatEvents.CHATMESSAGE , (msg:ChatMessageReceiveBody)=>{
      console.log("message from server : " , msg ) ; 
    })
}    

export default registerCallbacks ;
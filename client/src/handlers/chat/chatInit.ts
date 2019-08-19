import openSocket from 'socket.io-client'  ; 
import registerCallbacks from './callbacks';
import { globalStore } from '../../store/globalStore';

let chatsocket : SocketIOClient.Socket ; 
const serverURL  = `${globalStore.getState().serverIp}:${globalStore.getState().serverPort}`

const initChatSocket= ()=>{
  if(chatsocket==undefined){
    console.log('connecting to ' , serverURL);
    chatsocket = openSocket(serverURL) ; 
    registerCallbacks(chatsocket) ; 
  }
}

export {initChatSocket, chatsocket}; 
  

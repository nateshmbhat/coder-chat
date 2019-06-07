import openSocket from 'socket.io-client'  ; 
import registerCallbacks from './callbacks';

let chatsocket : SocketIOClient.Socket ; 
const serverURL  = 'localhost:9000/chat' ; 

const initChatSocket= ()=>{
  if(chatsocket==undefined){
    console.log('connecting to ' , serverURL);
    chatsocket = openSocket(serverURL) ; 
    registerCallbacks(chatsocket) ; 
  }
}

export {initChatSocket, chatsocket}; 
  

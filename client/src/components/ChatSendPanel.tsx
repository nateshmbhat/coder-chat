import React, { useContext, useState } from 'react' ; 
import globalContext from '../store/globalContext';
import { sendChatMessage } from '../handlers/chat/sender';


const ChatSendPanel :React.FC = ()=>{
    const totalRows = useContext(globalContext).totalRows ;
    const [message , setMessage] = useState('') ; 

    return (
        <>
        <div style={{
            gridRow:`${totalRows+1} / ${totalRows+2}` , 
            gridColumn:'1 / 3',
            backgroundColor:'#c4c4c4',
            zIndex:9 , 
            boxShadow:'0.1px 1px 15px black' , 
        }} >
        </div>

        <div style={{
            backgroundColor:'#B2B4BE' , 
            gridColumn:`3 / 13` ,
            paddingBottom:'10px'  ,
            paddingTop:'10px' , 
            // gridRow : `${totalRows-2} / ${totalRows+1}`,
            height:'50px' , 
        }} 
        >

        <div style={{
            height:'100%', width:'100%' ,
            display:'flex',
            flexDirection:'row' , 
            justifyContent:'center',
            justifyItems:'center' , 
            alignItems:'center',
        }} 
        >

        <textarea
            style={{
                backgroundColor:'#F8F8F8' , 
                paddingLeft:'20px',
                paddingRight:'50px',
                borderRadius:'50px' , 
                height:'100%' , 
                width:'90%', 
                marginLeft:'50px' , 
                outline:'none' , 
                boxSizing: 'border-box' , 
                WebkitBoxSizing:'border-box' , 
                fontSize:'100%' , 
                fontFamily:'caladea' , 
                MozBoxSizing:'border-box' ,
           }}
           onChange={e=>setMessage(e.target.value)}
           value={message}
            ></textarea>

            <span style={{
                borderRadius:'50%',
                padding:'5px',
                userSelect:'none' , 
                fontSize:'150%',
                transform:'translateX(-45px)',
                backgroundColor:'#CFDCEE' , 
                boxShadow:'1px 1px 5px black',
            }}
            onClick={e=>sendChatMessage(message)}
            >
                🚀
            </span>

        </div>

        </div>
        </>
    )
} 

export default ChatSendPanel ; 
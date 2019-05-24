import { connect } from "react-redux";
import React from 'react' ; 
import { ChatMessage } from "./ChatMessage";

interface ChatSectionStateProp{
    totalRows : number 
}

const ChatSection: React.FC<ChatSectionStateProp> = (prop) => {
    const totalRows = prop.totalRows
    return (
        <div style={{ 
                backgroundColor: '#5A657B' , 
                overflowY:'scroll' , 
                position:'relative',
                gridColumn:'3 / 13' , 
                gridRow:`2 / ${totalRows+1}` 
        }} >

        <ChatMessage msg={"hello I tsm eldskjf "} isMyMessage={true}/>
        
        </div>
    );
}

const mapStateToProps = (state:ChatSectionStateProp)=>({
    totalRows : state.totalRows
});

export default connect(mapStateToProps)(ChatSection) ; 
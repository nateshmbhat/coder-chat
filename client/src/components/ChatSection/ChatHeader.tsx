import React from 'react' ; 

const ChatHeader: React.FC = () => {
    return (
        <div style={{ 
                background: 'linear-gradient(#8E8DE5 , #6B7CD7)' , 
                zIndex :9 , 
                boxShadow:'0.1px 0.1px 5px black' , 
                gridColumn : '3 / 13' ,
                height:'50px'
            }} >
        </div>
    );
}

export {ChatHeader} ;
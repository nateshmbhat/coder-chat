import React from 'react';

interface ChatMessageProps {
    msg: string,
    sender?: string,
    isMyMessage?: boolean , 
    time : Date
}

const ChatMessage: React.FC<ChatMessageProps> = (props) => {
    return (
        <div style={{
            margin: '20px',
            flexDirection: 'column',
            alignItems: props.isMyMessage ? 'flex-end' : 'flex-start',
            display: 'flex'
        }}>
            <div>
                {
                    props.isMyMessage ||
                    <p style={{
                        backgroundColor: '#C6E3FF',
                        display: 'inline-block',
                        margin: '0',
                        fontSize: '13px',
                        borderTopLeftRadius: '50px',
                        borderTopRightRadius: '50px',
                        borderBottomLeftRadius: '0',
                        borderBottomRightRadius: '0',
                        paddingLeft: '15px',
                        paddingRight: '15px'
                    }}>{props.sender || 'Anonymous'}</p>
                }
                <br/>
                <p style={{
                    backgroundColor: '#E8E8E8',
                    display: 'inline-block',
                    margin: '0',
                    borderRadius: '10px',
                    borderTopLeftRadius: '0',
                    padding: '10px',
                }}>
                    {props.msg}
                </p>
            </div>
        </div>
    );
}

export { ChatMessage }; 
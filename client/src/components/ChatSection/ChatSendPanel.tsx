import React, { useState } from 'react';
import { sendChatMessage } from '../../handlers/chat/sender';
import { Button, Input} from 'semantic-ui-react';


const ChatSendPanel = () => {

    const [message, setMessage] = useState('');

    return (
            <div style={{ position: 'sticky',   top:'90%', marginLeft:'20px' , marginRight:'20px' }}>
                    <div style={{ display: 'flex' }} className='mh-1'>
                        <div style={{ flexGrow: 100 }}>
                            <Input
                                fluid
                                onChange={(e, d) => {
                                    console.log(d);
                                    if (typeof d.value === 'string')
                                        setMessage(d.value);
                                }}
                                value={message}
                            ></Input>
                        </div>
                        <Button circular icon compact size='huge' color='olive' onClick={e => {
                            sendChatMessage(message);
                            setMessage('');
                        }} > 🚀 </Button>
                    </div>
            </div>
    )
}


export default (ChatSendPanel); 
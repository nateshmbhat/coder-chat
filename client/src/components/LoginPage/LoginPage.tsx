import React, { useState } from 'react';
import { Message, Card, Input, Segment, Header, Icon, Grid, Container, Button, Divider } from 'semantic-ui-react';
import useReactRouter from 'use-react-router';
import { LocalStorageItemNames } from '../../types/types';
import { useStoreActions } from '../../store/globalStore';
import { SizedBox } from '../Misc';


const LoginPage = () => {
    const [setStoreUserId, setStoreUserName] = useStoreActions(actions => [actions.setUserId, actions.setUsername]);
    const [username, setUsername] = useState('');
    const [userid, setUserId] = useState('');
    const [error, toggleError] = useState(false);
    const { history, location, match } = useReactRouter();
    console.log('history , loc , match = ', history, location, match)
    if (userid != undefined) {
        history.push('/chat');
    }

    const handleLoginClick = () => {
        if (!userid.match('^[a-z0-9.]+@gmail\.com$') || !username.match('^[a-zA-Z]{3,}$')) {
            toggleError(true);
            return;
        }
        else {
            toggleError(false);
        }

        setStoreUserId(userid);
        setStoreUserName(username);
        localStorage.setItem(LocalStorageItemNames.CODER_CHAT_USER_NAME, username);
        localStorage.setItem(LocalStorageItemNames.CODER_CHAT_USER_EMAILID, userid);
        history.push('/livecode');
    }

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', height: '100vh' }}>
                <Container>
                    <Segment placeholder color='teal' >
                        <Header icon>
                            <Icon name='user circle' color='violet' />
                            Enter your credentials
                </Header>
                        <Input onChange={e => setUsername(e.target.value)} value={username} placeholder="Your Name" />

                        <SizedBox />
                        <Input onChange={e => setUserId(e.target.value)} value={userid} placeholder="Gmail ID" />
                        <SizedBox />
                        <Button content='Go' icon={<Icon name='paper plane outline' />} onClick={e => handleLoginClick()} />
                    </Segment>
                    {
                        error &&
                        <Message negative>
                            <Message.Header>Invalid Name or Email entered ! </Message.Header>
                            <p>Make sure that name field doesn't contain any special characters and E-mail is a valid gmail id.</p>
                        </Message>
                    }

                </Container>
                <SizedBox />
            </div>
        </>
    );
}

export default LoginPage; 
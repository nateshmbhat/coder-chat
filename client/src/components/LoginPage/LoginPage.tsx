import React, { useState } from 'react';
import { Message, Card, Input, Segment, Header, Icon, Grid, Container, Button, Divider } from 'semantic-ui-react';
import useReactRouter from 'use-react-router';
import { LocalStorageItemNames } from '../../types/types';
import { useStoreActions, useStoreState } from '../../store/globalStore';
import { SizedBox } from '../Misc';

export const LoginPage = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', height: '100vh' }}>
            <LoginComponent />
        </div>
    )
}

export const LoginComponent = () => {
    const [setStoreEmailid, setStoreUserName] = useStoreActions(actions => [actions.setUserId, actions.setUsername]);
    const [storeUsername , storeEmail ] = useStoreState(s=>[s.myUsername,s.myUserEmail])
    const [username, setUsername] = useState(storeUsername);
    const [emailid, setEmailId] = useState(storeEmail);
    const [error, toggleError] = useState(false);
    const { history, location, match } = useReactRouter();
    console.log('history , loc , match = ', history, location, match)

    const handleLoginClick = () => {
        if (!emailid.match('^[a-z0-9.]+@gmail\.com$')) {
            toggleError(true);
            return;
        }
        else {
            toggleError(false);
        }

        setStoreEmailid(emailid);
        setStoreUserName(username);
        localStorage.setItem(LocalStorageItemNames.CODER_CHAT_USER_NAME, username);
        localStorage.setItem(LocalStorageItemNames.CODER_CHAT_USER_EMAILID, emailid);
        history.push('/livecode');
    }

    return (
        <>
            <Container>
                <Segment placeholder color='teal' >
                    <Header icon>
                        <Icon name='user circle' color='violet' />
                        Enter your credentials
                </Header>
                    <Input onChange={e => setUsername(e.target.value)} value={username} placeholder="Your Name" />

                    <SizedBox />
                    <Input onChange={e => setEmailId(e.target.value)} value={emailid} placeholder="Gmail ID" />
                    <SizedBox />
                    <Button content='Save' icon={<Icon name='paper plane outline' />} onClick={e => handleLoginClick()} />
                </Segment>
                {
                    error &&
                    <Message negative>
                        <Message.Header>Invalid Email entered ! </Message.Header>
                        <p>Make sure that E-mail is a valid gmail id.</p>
                    </Message>
                }

            </Container>
            <SizedBox />
        </>
    );
}
import React, { useState } from 'react';
import { ButtonHoverableMd, InputTextStyled } from '../styled-component-styles/styles';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Message, Card, Input, Segment, Header, Icon, Grid, Container, Button } from 'semantic-ui-react';
import { LocalStorageItemNames } from '../types/mytypes';
import { useStoreActions } from '../store/globalStore';
import { SizedBox } from './Misc';


const LoginPage = (props: RouteComponentProps) => {
    const [setStoreUserId, setStoreUserName] = useStoreActions(actions => [actions.setUserId, actions.setUsername])

    const [username, setUsername] = useState('');
    const [userid, setUserId] = useState('');
    const [error, toggleError] = useState(false);

    const handleLoginClick = (props: RouteComponentProps) => {
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
        props.history.push('/chat');
    }

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100vh' }}>
                <Container>
                    <Segment placeholder>
                        <Header icon>
                            <Icon name='user' />
                            No documents are listed for this customer.
                </Header>
                        <Input onChange={e => setUsername(e.target.value)} value={username} placeholder="Your Name" />
                        <Input onChange={e => setUserId(e.target.value)} value={userid} placeholder="Gmail ID" />
                        {
                            error &&
                            <Message negative>
                                <Message.Header>Invalid Name or Email entered ! </Message.Header>
                                <p>Make sure that name field doesn't contain any special characters and E-mail is a valid gmail id.</p>
                            </Message>
                        }

                        <SizedBox />
                        <Button content='Go' icon={<Icon name='paper plane outline'/>} />
                    </Segment>
                </Container>
                <SizedBox height='300px' />

            </div>
        </>



    );
}
export default (withRouter(LoginPage)); 
import React, { useState } from 'react';
import { ButtonHoverableMd, InputTextStyled } from '../styled-component-styles/styles';
import { ActionType } from '../types/reducerTypes';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Message } from 'semantic-ui-react';
import { LocalStorageItemNames } from '../types/mytypes';


interface LoginPageProps {
    setUsername: (name: string) => any,
    setUserId: (id: string) => any // email
};

const LoginPage = (props: RouteComponentProps & LoginPageProps) => {

    const [username, setUsername] = useState('');
    const [userid, setUserId] = useState('');
    const [error, toggleError] = useState(false);

    const handleLoginClick = (props: RouteComponentProps & LoginPageProps) => {
        if (!userid.match('^[a-z0-9.]+@gmail\.com$') || !username.match('^[a-zA-Z]{3,}$')) {
            toggleError(true) ; 
            return;
        }
        else{
            toggleError(false) ; 
        }

        props.setUserId(userid);
        props.setUsername(username);
        localStorage.setItem(LocalStorageItemNames.CODER_CHAT_USER_NAME , username) ; 
        localStorage.setItem(LocalStorageItemNames.CODER_CHAT_USER_EMAILID , userid) ; 
        props.history.push('/chat');
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            placeItems: 'center',
            justifyContent: 'center',
        }}>
            <div style={{
                boxShadow: '3px 3px 10px rgba(0,0,0,0.7)',
                textAlign: 'center',
                display: 'flex',
                border: '1px solid grey',
                backgroundColor: '#3E3E3E',
                borderRadius: '5px',
                flexDirection: 'column',
                padding: '100px',
                position: 'relative',
                paddingLeft: '150px',
                paddingRight: '150px',
            }}>


                <p style={{
                    color: 'white',
                    textDecoration: 'bold',
                    margin: '0',
                    position: 'absolute',
                    width: '100%',
                    paddingTop: '10px',
                    paddingBottom: '10px',
                    top: 0,
                    fontSize: '18px',
                    alignSelf: 'center',
                    backgroundColor: 'rgba(40,40,40,0.8)',
                }}>
                    Enter Details
            </p>
                <InputTextStyled onChange={e => setUsername(e.target.value)} value={username} placeholder="Your Name" />
                <br />
                <InputTextStyled onChange={e => setUserId(e.target.value)} value={userid} placeholder="Gmail ID" />

                {
                    error &&
                    <Message negative>
                        <Message.Header>Invalid Name or Email entered ! </Message.Header>
                        <p>Make sure that name field doesn't contain any special characters and E-mail is a valid gmail id.</p>
                    </Message>
                }

                <ButtonHoverableMd onClick={e => handleLoginClick(props)}>
                    GO
                </ButtonHoverableMd>
            </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setUsername: (name: string) => { dispatch({ type: ActionType.SET_USERNAME, payload: name.trim() }) },
        setUserId: (id: string) => { dispatch({ type: ActionType.SET_USERID, payload: id.trim() }) }
    }
};

export default connect(null, mapDispatchToProps)(withRouter(LoginPage)); 
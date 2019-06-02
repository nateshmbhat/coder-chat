import React, { useState } from 'react';
import { ButtonHoverableMd, InputTextStyled } from '../styled-component-styles/styles';
import { ActionType } from '../types/reducerTypes';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';


interface LoginPageProps {
    setUsername: (name: string) => any ,
    setUserId: (id: string) => any 
}; 

const LoginPage = (props : RouteComponentProps & LoginPageProps ) => {

    const [username, setUsername] = useState('');
    const [userid, setUserId] = useState('');

    const handleLoginClick = (props : RouteComponentProps &  LoginPageProps )=>{
        props.setUserId(userid) ;  
        props.setUsername(username) ;  
        props.history.push('/chat')  ;
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
                <InputTextStyled onChange={e => setUserId(e.target.value)} value={userid} placeholder="User ID" />

                    <ButtonHoverableMd onClick={e=>handleLoginClick(props)}>
                            GO
                    </ButtonHoverableMd>
            </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setUsername: (name: string) => { dispatch({ type: ActionType.SET_USERNAME, payload: name }) },
        setUserId: (id: string) => { dispatch({ type: ActionType.SET_USERID, payload: id }) }
    }
};

export default connect(null, mapDispatchToProps)( withRouter(LoginPage)) ; 
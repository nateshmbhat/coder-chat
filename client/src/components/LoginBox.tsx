import React, { useState } from 'react';
import styled from 'styled-components';
import { ShadowAndHoverShadow, ButtonHoverableMd, InputTextStyled } from '../styled-component-styles/styles';

const LoginPage = () => {

    const [username,setUsername] = useState('') ;
    const [userid,setUserId] = useState('') ;


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
                position:'relative',
                paddingLeft: '150px',
                paddingRight: '150px',
            }}>


            <p style={{
                color:'white',
                textDecoration:'bold' , 
                margin:'0',
                position:'absolute' ,
                width:'100%' , 
                paddingTop:'10px' , 
                paddingBottom:'10px' , 
                top:0,
                fontSize:'18px' ,
                alignSelf:'center',
                backgroundColor: 'rgba(40,40,40,0.8)',
            }}>
                Enter Details
            </p>

                <InputTextStyled value={username} placeholder="Your Name" />
                <br/>
                <InputTextStyled value={userid} placeholder="User ID" />

            <ButtonHoverableMd >
                GO
            </ButtonHoverableMd>

            </div>
        </div>
    );
}

export { LoginPage}; 
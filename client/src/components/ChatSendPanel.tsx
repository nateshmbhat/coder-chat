import React, { useState } from 'react';
import { sendChatMessage } from '../handlers/chat/sender';
import { connect } from 'react-redux';
import computerIcon from './icons/computer.svg';
import styled from 'styled-components';
import {ShadowAndHoverShadow} from '../styled-component-styles/styles' ; 
import { Dispatch } from 'redux';
import { ActionType } from '../types/reducerTypes';

interface ChatSendPanelProps {
    totalRows: number , 
    toggleLiveCodeEditor : ()=>void
};

const ChatSendPanel= (props:ChatSendPanelProps) => {
    const totalRows = props.totalRows;
    const [message, setMessage] = useState('');

    const ComputerIcon = styled.img`
                margin : 0 ; padding : 0 ; 
                -webkit-filter: drop-shadow( 1px 1px 2px rgba(0, 0, 0, .7));
                filter: drop-shadow( 1px 1px 1px rgba(0, 0, 0, .7));
                transition:all 0.3s ; 
                :hover{
                    transform : scale(1.1) ; 
                    -webkit-filter: drop-shadow( 3px 3px 2px rgba(0, 0, 0, .7));
                    filter: drop-shadow( 3px 3px 2px rgba(0, 0, 0, .5));
                }
                :active{
                    transition:all 0.1s ;
                    transform : scale(1.05) ; 
                    filter: drop-shadow( 3px 3px 2px rgba(0, 0, 0, .2));
                }` ; 

    return (
        <>
            <div style={{
                gridRow: `${totalRows + 1} / ${totalRows + 2}`,
                gridColumn: '1 / 3',
                backgroundColor: '#c4c4c4',
                zIndex: 9,
                boxShadow: '0.1px 1px 15px black',
            }} >
            </div>

            <div style={{
                backgroundColor: '#B2B4BE',
                gridColumn: `3 / 13`,
                display: 'flex',
                paddingBottom: '10px',
                paddingTop: '10px',
                height: '50px',
            }}
            >

                <ComputerIcon onClick={(e)=>props.toggleLiveCodeEditor()} src={computerIcon} />

                <div style={{
                    height: '100%', width: '100%',
                    display: 'flex',
                    marginRight:'30px',
                    position:'relative' , 
                    flexDirection: 'row',
                    justifyContent: 'center',
                    justifyItems: 'center',
                    alignItems: 'center',
                }}
                >

                <textarea
                    style={{
                        backgroundColor: '#F8F8F8',
                        paddingLeft: '5px',
                        paddingRight: '50px',
                        borderRadius: '8px',
                        height: '100%',
                        width: '100%',
                        resize: 'none',
                        outline: 'none',
                        boxSizing: 'border-box',
                        WebkitBoxSizing: 'border-box',
                        fontSize: '100%',
                        fontFamily: 'caladea',
                        MozBoxSizing: 'border-box',
                    }}
                    onChange={e => setMessage(e.target.value)}
                    value={message}
                ></textarea>

                    <ShadowAndHoverShadow>
                        <span style={{
                            borderRadius: '50%',
                            padding: '5px',
                            userSelect: 'none',
                            position:'absolute',
                            fontSize: '170%',
                            transform: 'translate3d(-45px, -21px, 0px)',
                            backgroundColor: 'rgba(2, 3, 4, 0.33)',
                        }}
                            onClick={e => sendChatMessage(message)}
                        > 🚀 </span>
                    </ShadowAndHoverShadow>

                </div>
            </div>
        </>
    )
}


const mapStateToProps = (state: ChatSendPanelProps) => ({
    totalRows: state.totalRows
});

const mapDispatchToProps = (dispatch : Dispatch)=>{
    return {
        toggleLiveCodeEditor : ()=>dispatch({type:ActionType.TOGGLE_LIVECODE_EDITOR}) 
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(ChatSendPanel); 
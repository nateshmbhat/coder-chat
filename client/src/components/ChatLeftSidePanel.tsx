import React from 'react';
import { connect } from 'react-redux';
import { senderToLiveCodeMap } from '../types/mytypes';
import { Button, Icon, Divider } from 'semantic-ui-react';
import { Dispatch } from 'redux';
import { ActionType } from '../types/reducerTypes';

interface ContactsSectionProp {
    totalRows: number;
    liveCodePeersMap: senderToLiveCodeMap;
    activeLiveCodePeerId: string;
    setActiveLiveCodePeer: (peerid: string|null) => void;
}

// This is the left panel that runs from top to bottom of the page.
const ChatLeftPanel: React.FC<ContactsSectionProp> = (props) => {
    const totalRows = props.totalRows

    const peersComponent = Object.keys(props.liveCodePeersMap).map(peerid => {
        let activated = peerid === props.activeLiveCodePeerId;
        return (
            <div key={peerid} style={{ backgroundColor: activated ? '#16AB39' : 'rgb(131,131,131)' }} >
                <Button key={peerid} toggle active={activated} fluid color='grey' compact onClick={e => activated?props.setActiveLiveCodePeer(null):props.setActiveLiveCodePeer(peerid)} >
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Icon size='large' name='user' />
                        <p style={{ fontSize: '1.5em', paddingLeft: '5px' }} >
                            {props.liveCodePeersMap[peerid].sendername}
                        </p>
                    </div>
                </Button>

            </div>
        );
    })

    return (
        <div style={{
            backgroundColor: '#c4c4c4',
            zIndex: 10,
            gridColumn: '1 / 3',
            boxShadow: '0.1px -15px 15px black',
            gridRow: `1 / ${totalRows + 1}`
        }} >
            {peersComponent}
        </div>
    );
}

const mapStateToProps = (state: ContactsSectionProp) => ({
    totalRows: state.totalRows,
    liveCodePeersMap: state.liveCodePeersMap,
    activeLiveCodePeerId: state.activeLiveCodePeerId,
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
    setActiveLiveCodePeer: (peerid: string|null) => dispatch({ type: ActionType.SET_ACTIVE_LIVECODE_PEER, payload: peerid })
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatLeftPanel); 
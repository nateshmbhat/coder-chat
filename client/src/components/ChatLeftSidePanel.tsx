import React from 'react';
import { connect } from 'react-redux';
import { senderToLiveCodeMap } from '../types/mytypes';
import { Button } from 'semantic-ui-react';

interface ContactsSectionProp {
    totalRows: number;
    liveCodePeers: senderToLiveCodeMap

}

// This is the left panel that runs from top to bottom of the page.
const ChatLeftPanel: React.FC<ContactsSectionProp> = (props) => {
    const totalRows = props.totalRows

    const peersComponent = Object.keys(props.liveCodePeers).map(peerid => {
        return (
            <Button>
                <div>
                    <h3>{peerid}</h3>
                </div>
            </Button>
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
    liveCodePeers: state.liveCodePeers
});

export default connect(mapStateToProps)(ChatLeftPanel); 
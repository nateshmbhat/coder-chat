import React from 'react';
import { Loader } from 'semantic-ui-react';

const BigLoaderCentered = (props: {inverted? : boolean})=>(<div style={{ position: 'relative', height: '100%' }}>
    <div style={{ position: 'absolute', width: '100%', height: '100%', textAlign: 'center', display: 'flex', alignItems: 'center' }}>
        <Loader size='massive' inverted={props.inverted} active inline='centered'>Loading</Loader>
    </div>
</div>);

export { BigLoaderCentered }; 
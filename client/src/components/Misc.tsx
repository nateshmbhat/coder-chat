import React from 'react';
import { Loader } from 'semantic-ui-react';

const BigLoaderCentered = (props: {inverted? : boolean})=>(<div style={{ position: 'relative', height: '100%' }}>
    <div style={{ position: 'absolute', width: '100%', height: '100%', textAlign: 'center', display: 'flex', alignItems: 'center' }}>
        <Loader size='massive' inverted={props.inverted} active inline='centered'>Loading</Loader>
    </div>
</div>);

const SizedBox = (props:{height?:string,width?:string})=>{
    console.log('height = ' , props.height)
    return(
        <div style={{height:props.height||'10px', width :props.width||'10px'}}></div>
    )
}

export { BigLoaderCentered , SizedBox }; 
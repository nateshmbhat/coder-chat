import React, { Children, ReactChildren, ReactNode } from 'react';
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

export const DivAbsolute= (props:any)=>{
    return <div style={{position:'absolute' , ...props}}>
        {props.children}
    </div>
}
export const DivRelative= (props:{children:ReactNode})=>{
    return <div style={{position:'relative' , }}>
        {props.children}
    </div>
}

export const Flex = (props : {direction?:'row'|'column' , children:ReactNode})=>{
    return <div style={{display:'flex' , flexDirection: props.direction }} >
        {props.children}
    </div>
}

export const FlexItem = (props : {children:ReactNode , grow? : number})=>{
    return <div style={{flexGrow : props.grow}} >
        {props.children}
    </div>
}

export { BigLoaderCentered , SizedBox }; 
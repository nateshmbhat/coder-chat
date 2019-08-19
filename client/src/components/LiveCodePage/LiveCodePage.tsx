import React from 'react'
import { NavBar } from '../NarBar/NavBar';
import { NavLinkPaths } from '../../types/types';
import LiveCodeEditor from './LiveCodeEditor';

export const LiveCodePage = ()=>{
    return <>
        <NavBar navPath={NavLinkPaths.livecode}/>
        <LiveCodeEditor/>
    </>
}
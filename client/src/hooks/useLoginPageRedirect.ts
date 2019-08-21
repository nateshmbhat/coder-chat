import useReactRouter from 'use-react-router';
import React from 'react'
import { LocalStorageItemNames } from '../types/types';

export const useLoginPageRedirect = ()=>{
    const {history , location , match} = useReactRouter() ; 
    console.log(history , location ,match)
    if (localStorage.getItem(LocalStorageItemNames.CODER_CHAT_USER_EMAILID) == null) {
        if(location.pathname!='/login') {
            history.push('/login')
        }
    }
}
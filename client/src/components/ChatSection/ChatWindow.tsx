import React, { useContext } from 'react';
import ChatSection from './ChatSection';
import ChatUserListPanel from './ChatLeftSidePanel';
import { LocalStorageItemNames, GlobalStoreType, NavLinkPaths } from '../../types/types';
import { useStoreState } from '../../store/globalStore';
import { NavBar } from '../NarBar/NavBar';
import { Flex, FlexItem } from '../Misc';
import useReactRouter from 'use-react-router';
import { useLoginPageRedirect } from '../../hooks/useLoginPageRedirect';


const ChatPage = () => {
    useLoginPageRedirect()
    return (
        <>
            <NavBar navPath={NavLinkPaths.chat} />
            <div style={{ height: '100%' }}>
                <Flex>
                    <div style={{flexGrow:1}}>
                        <ChatUserListPanel />
                    </div>

                    <div style={{flexGrow:10 }}>
                        <ChatSection />
                    </div>
                </Flex>
            </div>
        </>
    );
}

export default ChatPage;
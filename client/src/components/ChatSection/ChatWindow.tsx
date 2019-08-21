import React from 'react';
import ChatSection from './ChatSection';
import ChatUserListPanel from './ChatLeftSidePanel';
import { NavLinkPaths } from '../../types/types';
import { NavBar } from '../NarBar/NavBar';
import { Flex, FlexItem } from '../Misc';
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
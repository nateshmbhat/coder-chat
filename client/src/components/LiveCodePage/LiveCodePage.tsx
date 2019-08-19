import React from 'react'
import { NavBar } from '../NarBar/NavBar';
import { NavLinkPaths } from '../../types/types';
import LiveCodeEditor from './LiveCodeEditor';
import ChatUsersListPanel from '../ChatSection/ChatLeftSidePanel';
import { Flex, DivRelative } from '../Misc';

export const LiveCodePage = () => {
    return <>
        <NavBar navPath={NavLinkPaths.livecode} />
        <Flex>
            <div style={{flexGrow:1}} >
            <ChatUsersListPanel />

            </div>
            <div style={{ flexGrow: 10 }}>
                <LiveCodeEditor />

            </div>
        </Flex>
    </>
}
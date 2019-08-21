import * as React from 'react';
import { Menu, Button, Icon, Popup, Modal } from 'semantic-ui-react';
import { NavLinkPaths } from '../../types/types';
import { NavLink } from 'react-router-dom';
import { useStoreState } from '../../store/globalStore';
import { ServerIpInputDialog, ProfileCredentialsInputDialog } from '../Misc';

export const NavBar = (props: { navPath: NavLinkPaths }) => {

    const [serverConnected , username] = useStoreState(s => [s.serverConnectedFlag,s.myUsername]);

    return (
        <>
            {/* EMPTY Navbar TO push the below dom content down */}
            <Menu inverted size='large' compact > </Menu>

            <Menu inverted size='large' fixed='top' compact  >
                <NavLink to={NavLinkPaths.livecode} draggable={false}>
                    <Menu.Item active={props.navPath === NavLinkPaths.livecode} icon={<Icon name='code' />} name='Live Code' link />
                </NavLink>

                <NavLink to={NavLinkPaths.chat} draggable={false}>
                    <Menu.Item name='Chat' active={props.navPath === NavLinkPaths.chat} icon='user' link />
                </NavLink >


                <Popup trigger={
                    <Menu.Item position='right' active={props.navPath === NavLinkPaths.home} icon={<Icon name='globe' color={serverConnected && 'green' || 'red'} />} />
                } >
                    {serverConnected && 'Connected To Server' || 'Disconnected from Server'}
                </Popup>


                <ServerIpInputDialog>
                    <Menu.Item name='Server Setup' icon={<Icon name='connectdevelop' />} link />
                </ServerIpInputDialog>

                <ProfileCredentialsInputDialog>
                    <Menu.Item name={username} icon={<Icon name='user circle' />} link />
                </ProfileCredentialsInputDialog>

           </Menu>
        </>
    )
}
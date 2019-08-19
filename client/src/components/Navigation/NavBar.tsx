import * as React from 'react';
import { Menu, Button, Icon } from 'semantic-ui-react';
import { NavLinkPaths } from '../../types/types';
import { NavLink } from 'react-router-dom';

export const NavBar = (props: { navPath: NavLinkPaths} ) => {
    return (
        <>
            {/* EMPTY Navbar TO push the below dom content down */}
            <Menu inverted size='large'> </Menu>

            <Menu inverted size='large' fixed='top'  >
                <NavLink to={NavLinkPaths.livecode} draggable={false}>
                    <Menu.Item active={props.navPath===NavLinkPaths.livecode} icon={<Icon name='code branch'/>} name='Live Code' link />
                </NavLink>

                <NavLink to={NavLinkPaths.login} draggable={false}>
                    <Menu.Item name='Login' active={props.navPath===NavLinkPaths.login}  icon='user' link />
                </NavLink >

                <NavLink to={NavLinkPaths.chat} draggable={false}>
                    <Menu.Item name='Login' active={props.navPath===NavLinkPaths.chat}  icon='user' link />
                </NavLink >

                <Menu.Menu position='right'>
                    <NavLink to={NavLinkPaths.home} draggable={false}>
                        <Menu.Item name='Home' active={props.navPath===NavLinkPaths.home} icon={<Icon name='home' color='yellow' />} link />
                    </NavLink>
                </Menu.Menu>
            </Menu>
        </>
    )
}
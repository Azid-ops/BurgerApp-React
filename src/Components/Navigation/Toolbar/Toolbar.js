import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NaivgationItems/NavigationItems';

import classes from './Toolbar.css'

const Toolbar = (props) =>{
    return <header className={classes.Toolbar}>
        <div className={classes.DrawerToggle} onClick={props.menu}>
            <div></div>
            <div></div>
            <div></div>
        </div>

        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
}

export default Toolbar;
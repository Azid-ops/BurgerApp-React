import React from 'react';
import Aux from '../../../hoc/Auxiliary';
import Logo from '../../Logo/Logo';
import BackDrop from '../../Ui/Backdrop/Backdrop';

import NavigationItems from '../NaivgationItems/NavigationItems';
import classes from './SideDrawer.css'

const SideDrawer = props =>{
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if(props.open)
    {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return(
        <Aux>
            <BackDrop show={props.open } clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                
                <nav>
                    <NavigationItems />
                </nav>
                
            </div>
        </Aux>
    )
}

export default SideDrawer;
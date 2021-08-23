import React from 'react'
import myImage from '../../Assets/images/28.1 burger-logo.png';
import classes from './Logo.css'
const Logo = props =>{
    return(
        <div className={classes.Logo} style={{height:props.height}}>
            <img src={myImage} alt="myBurger"/>
        </div>
    )
}

export default Logo
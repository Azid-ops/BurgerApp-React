import React from 'react';

import classes from './BuildControl.css'

const BuildControl = props =>(
    <div className={classes.BuildControl}>
        <div className={classes.label}>
            {props.label}
        </div>
        <button onClick={props.remove} 
            disabled={props.disabled} 
            className={classes.Less}
        >Less</button>
        <button onClick={props.added} className={classes.More}>More</button>   
    </div>
)

export default BuildControl;
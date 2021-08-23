import React from 'react';
import BuildControl from './BuildControl/BuildControl';

import classes from './BuildControls.css';

const controls = [
    {label:'Salad', type:'salad'},
    {label:'Bacon', type:'bacon'},
    {label:'Cheese', type:'cheese'},
    {label:'Meat', type:'meat'},
]

const BuildControls =props =>{
    return(
        <div className={classes.BuildControls}>
            <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
            {
               controls.map(item=>{
                return <BuildControl 
                    key={item.label}
                    label={item.label}
                    remove={()=>props.ingredientRemoved(item.type)}
                    added={()=> props.ingredientAdded(item.type)}
                    disabled={props.disabled[item.type]}
                />
               }) 
            }
            <button onClick={props.ordered} disabled={!props.purchase} className={classes.OrderButton}>ORDER NOW</button>
            
        </div>
    )
}

export default BuildControls;
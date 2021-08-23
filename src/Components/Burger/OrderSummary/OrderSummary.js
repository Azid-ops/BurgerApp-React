import React from 'react';
import Aux from '../../../hoc/Auxiliary';
import Button from '../../Ui/Button/button';

const OrderSummary = props =>{
    const ingredientSummary = Object.keys(props.ingredients).map(igKey=>{
        return <li key={igKey}>
                    <span style={{textTransofrm:'capitalize'}}>
                        {igKey}
                    </span>
                        :{props.ingredients[igKey]}
                </li>
    })
    return(
        <Aux>
            <h3>Your Order</h3>
            <p>A delecious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to CheckOut</p>
            <Button btnType="Danger" 
                    clicked={props.cancel}>CANCEL</Button>
            <Button btnType="Success"
                    clicked={props.continue}>CONTINUE</Button>
        </Aux>
    )
}

export default OrderSummary;
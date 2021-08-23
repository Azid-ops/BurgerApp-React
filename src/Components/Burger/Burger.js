import React from 'react';
import classes from './Burger.css';
import BurgerIn from './BurgerIn/BurgerIn';
const Burger = props =>{
    let transformedIngredients = Object.keys(props.ingredients).map(igKey=>{
        return [...Array(props.ingredients[igKey])].map((_,i)=>{
            return <BurgerIn key ={igKey+i} type={igKey}/>
        })
    }).reduce((arr,el)=>{
        return arr.concat(el);
    },[]);
    if(transformedIngredients.length === 0)
    {
        transformedIngredients = <p>Please Add some Ingredients</p>
    }
    console.log(transformedIngredients)
    return(
        <div className={classes.Burger}>
            <BurgerIn type="bread-top"/>
            {transformedIngredients}
            <BurgerIn type="bread-bottom"/>
        </div>
    )
}

export default Burger;
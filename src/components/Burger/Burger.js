import React from 'react'
import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
const burger=(props)=>{
    let transformedIndgrients=Object.keys(props.ingredients).map(igKey=>{
        //console.log(props.ingredients)
        //console.log(igKey)
        return [...Array(props.ingredients[igKey])].map((_,i)=>{
            return <BurgerIngredient key={igKey+i}  type={igKey } />
        })
    }).reduce((arr,el)=>{
        return arr.concat(el)
    },[])
    //console.log(transformedIndgrients)
    if(transformedIndgrients.length===0){
        transformedIndgrients=<p>Please add some items  </p>
    }
    return(
        <div className={classes.Burger}>
       <BurgerIngredient type="bread-top"/>
       {transformedIndgrients}
       <BurgerIngredient type="bread-bottom"/>
        </div>
    )
}
export default burger;
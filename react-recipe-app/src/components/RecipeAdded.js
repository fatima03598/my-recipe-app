import React from 'react'
import {Link} from "react-router-dom";
import '../CSS/RecipeAdded.css'

function RecipeAdded() {
    return (
        <div className='RecipeAdded'>
            <section className='title'>
            <img src={require('./heart-shaped.png')}   alt='heart-baloons'/><h1>Your recipe has been added!</h1><img src={require('./heart-shaped.png')}   alt='heart-baloons'/>
            </section>
           <Link to='/Recipes'><button className='added-button'>Show recipes</button></Link>
        </div>
    )
}

export default RecipeAdded

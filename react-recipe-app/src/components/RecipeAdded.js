import React, { Component } from 'react'
import {Link} from "react-router-dom";
import '../CSS/RecipeAdded.css'


class RecipeAdded extends Component {
    render () {
    return (
        <div className='RecipeAdded'>
            <section className='title'>
            <img src='/heart-shaped.png'   alt='heart-baloons'/><h1>Your recipe has been added!</h1><img src='/heart-shaped.png'   alt='heart-baloons'/>
            </section>
           <Link to='/Recipes'><button className='added-button'>Show recipes</button></Link>
        </div>
    )
}}

export default RecipeAdded

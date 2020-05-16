import React from 'react'
import {Link} from "react-router-dom";

function RecipeAdded() {
    return (
        <div>
            <h1>Your recipe has been added!</h1>
            <Link to='/Recipes'><button>Show recipes</button></Link>
        </div>
    )
}

export default RecipeAdded

import React from 'react'
import {Link} from "react-router-dom";
import '../CSS/NavBar.css'
function navBar() {
    return (
        <div className='navBar'>
            

            <Link to='/'  className='link'>Home</Link>
            <Link to='/Recipes'  className='link'>Recipes</Link>
        </div>
    )
}

export default navBar


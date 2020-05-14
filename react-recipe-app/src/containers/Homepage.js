import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Homepage extends Component {
    render() {
        return (
            <div>
                <h1>RECIPELANDIA</h1>
                <Link to='/Form'><button>Add recipe</button></Link>
                <Link to='/Recipes'><button>Show recipes</button></Link>
            </div>
        )
    }
}

export default Homepage

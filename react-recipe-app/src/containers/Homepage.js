import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Homepage extends Component {
    render() {
        return (
            <div>
                <h1>RECIPELANDIA</h1>
                <button>Add recipe</button>
                <button>Show recipes</button>
            </div>
        )
    }
}

export default Homepage

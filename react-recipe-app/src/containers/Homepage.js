import React, { Component } from 'react';
import {Link} from "react-router-dom";

import '../CSS/Homepage.css';

class Homepage extends Component {
    render() {
        return (
            <div className='Homepage'>
                <section className='main'>
                <article className='title'>
                <h1>RecipeLandia</h1><img src='/fashion.png'  alt='chef-cap'/>
                </article>
                <div className='Home-buttons'>
                    <Link to='/Form'><button className='Home-button' >Add recipe</button></Link>
                    <Link to='/Recipes'><button className='Home-button' >Show recipes</button></Link>
                </div>
                </section>
                <footer className='footer'>
                <div>Icons made by <a href="https://www.flaticon.com/free-icon/chef_526190" title="Those Icons">Those Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                </footer>
            </div>
        )
    }
}

export default Homepage

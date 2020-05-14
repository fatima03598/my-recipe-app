import React, { Component } from 'react';
import './CSS/App.css';
import Homepage from './containers/Homepage';
import {Switch, Route} from "react-router-dom";
import Navbar from './components/navBar';
import AddRecipeForm from './components/AddRecipeForm';
import ShowRecipe from './components/ShowRecipe';

class  App extends Component {
  render () {
     return (
    <div className="App">
      <Navbar/>
      <Switch>
      <Route path="/" exact component={Homepage} />
      <Route path="/Recipes" component={ShowRecipe} />
      <Route path="/Form"  component={AddRecipeForm} />
      </Switch>
    </div>
  );
  }
 
}

export default App;

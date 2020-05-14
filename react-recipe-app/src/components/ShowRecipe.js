import React, { Component } from 'react'
// import { response } from 'express';

 class ShowRecipe extends Component {

    constructor(props) {
        super(props);
        this.state = {
           recipes:null
        }};


    componentDidMount() {
         this.getRecipes()
          }

    getRecipes= () => {
        fetch('/api/recipelandia/recipes')
        .then(response => response.json())
        .then(result => this.setState({
            recipes: result
        },() => console.log(this.state.recipes)
        ))
    }

    render() {
        return (
            <div>
                {this.state.recipes ? this.state.recipes.map(recipe => <div key={recipe.id}  className='recipe'> <h1>{recipe.title}</h1><h3>{recipe.ingridients}</h3> <img src={recipe.imageURL}  alt='food'/> <h4>Difficulty: {recipe.difficulty} <br/> Duration: {recipe.minutes} minutes <br/> Serving: {recipe.serving}</h4> <p>{recipe.method}</p> </div>) : <h2>Loading recipes...</h2>}
            </div>
        )
    }
}

export default ShowRecipe

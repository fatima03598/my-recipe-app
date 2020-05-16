import React, { Component } from 'react'
import {Link} from "react-router-dom";


const breakafter = (string) => {
   return  string.split(".").join('. \n')
  
}

 class ShowRecipe extends Component {

    constructor(props) {
        super(props);
        this.state = {
           recipes:null,
           titles:[]

        }};
    


    componentDidMount() {
         this.getRecipes()
          }

    getRecipes= () => {
        fetch('/api/recipelandia/recipes')
        .then(response => response.json())
        .then(result => this.setState({
            recipes: result
        },() => this.state.recipes.map(item => this.state.titles.push(item.title))
        )
        )
    }


    render() {
        return (
           
            <div >
               <Link to={{pathname:"/Search", state: { titles:this.state.titles, recipes: this.state.recipes }}}><button>Search</button></Link>
                {this.state.recipes ? this.state.recipes.map(recipe => <div key={recipe.id}  className='recipe'> <h1>{recipe.title}</h1><h3>{recipe.ingridients}</h3><img src={recipe.imageURL}  alt='food'/> <h4>Difficulty: {recipe.difficulty} <br/> Duration: {recipe.minutes} minutes <br/> Serving: {recipe.serving}</h4> <p>{breakafter(recipe.method)}</p> </div>) : <h2>Loading recipes...</h2>}
            </div>
        )
    }
}

export default ShowRecipe

import React, { Component } from 'react'
import {Link} from "react-router-dom";


const breakafter = (string, punctuation) => {
 return string.split(punctuation).join('. \n ') 

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
        .catch((error) => {
            console.error('Error:', error);
            })
    };


    render() {
        const {titles, recipes} = this.state
        return (
           
            <div className='ShowRecipe' >
               <Link to={{
                          pathname:"/Search", 
                          state: { titles:titles, recipes: recipes }
                          }}>
                              <button   className='ShowRecipeSearch-button'>Search</button>
                </Link>
                {recipes ? this.state.recipes.map(recipe => <div key={recipe.id}  className='recipe'> 
                                                                <h1>{recipe.title}</h1>
                                                                <h3>{breakafter(recipe.ingridients,';')}</h3>
                                                                <img src={recipe.imageURL}  alt='food'/> 
                                                                <h4>Difficulty: {recipe.difficulty} <br/> 
                                                                Duration: {recipe.minutes} minutes <br/> 
                                                                Serving: {recipe.serving}</h4>
                                                                <p>{breakafter(recipe.method, '.')}</p> 
                                                             </div>) 
                                                             : <h2>Loading recipes...</h2>}
            </div>
        )
    }
}

export default ShowRecipe

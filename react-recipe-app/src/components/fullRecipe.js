import React, { Component } from 'react'
import '../CSS/ShowRecipe.css'
const breakafter = (string, punctuation) => {
    return string.split(punctuation).join('. \n ') 
   
   }
class fullRecipe extends Component {
    render() {
        return (
            <div className='ShowRecipe'>
                 {this.props.location.state.recipe ? <div key={this.props.location.state.recipe.id} className='recipe'> 
                                                               <h1>{this.props.location.state.recipe.title}</h1>
                                                                <p className='ingredients'>{breakafter(this.props.location.state.recipe.ingridients,';')}</p>
                                                                <img src={this.props.location.state.recipe.imageURL}  alt='food'/> 
                                                                <h4>Difficulty: {this.props.location.state.recipe.difficulty} <br/> 
                                                                Duration: {this.props.location.state.recipe.minutes} minutes <br/> 
                                                                Serving: {this.props.location.state.recipe.serving}</h4>
                                                                <p>{breakafter(this.props.location.state.recipe.method, '.')}</p> 
                                                             </div> 
                                                             : <h2>Loading recipes...</h2>}
            </div>
        )
    }
}

export default fullRecipe


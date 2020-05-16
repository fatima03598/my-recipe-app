import React, { Component } from 'react';
import {Link} from "react-router-dom";

class AddRecipeForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
           title:undefined,
           ingridients:undefined,
           minutes:undefined,
           serving:undefined,
           imageURL:undefined,
           method:undefined,
           difficulty:'easy'
        }};

    handleChange = (event) => {
        const name = event.target.name;
         this.setState({
             [name]: event.target.value
     })
     }

    handleSubmit = (event) => {
        const states = Object.values(this.state);
         if(states.includes(undefined)){
            alert('Please fill all the required fields') 
         } else {
             const data = {
                 title: this.state.title,
                 ingridients: this.state.ingridients,
                 difficulty: this.state.difficulty,
                 minutes: Math.floor(this.state.minutes),
                 serving: Math.floor(this.state.serving),
                 imageURL: this.state.imageURL,
                 method:this.state.method
                 
                  }
             fetch('/api/recipelandia/recipes', {
                 method: 'POST', 
                 headers: {
                    'Content-Type': 'application/json',
                     },
                 body: JSON.stringify(data),
                   })
                .then(response => response.json())
                .then(data => {
                console.log('Success:', data);
                })
                .catch((error) => {
                console.error('Error:', error);
                })
        };
        event.preventDefault();     
     }
    render() {
        return (
            <div>
                <p className='required'> * for required fields</p>
                <form onSubmit={this.handleSubmit}>
                <label>
                 Title:
                    <input type="text" value={this.state.title} name='title' onChange={this.handleChange} /><span>*</span>
                </label>
                <label>
                 Ingredients:
                    <textarea type="text" value={this.state.ingridients} name='ingridients' onChange={this.handleChange} /><span>*</span>
                </label>
                <label>
                 How many minutes will it take? :
                    <span  className='numberCheck'>Please write a number </span>
                    <input type="number" value={this.state.minutes} name='minutes' onChange={this.handleChange} /><span>*</span>
                </label>
                <label>
                 How many people will it serve? :
                    <span className='numberCheck'>Please write a number </span>
                    <input  type="number" value={this.state.serving} name='serving'  onChange={this.handleChange} /><span>*</span>
                </label>
                <label>
                 What's the difficulty? :
                    <select value={this.state.difficulty}  name='difficulty' onChange={ this.handleChange}>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                </label>
                <label>
                 Image URL of completed result to add:
                    <input type="text" name='imageURL' value={this.state.imageURL} onChange={this.handleChange} /><span>*</span>
                </label>
                <label>
                 Method:
                    <textarea type="text"  name='method' value={this.state.method} onChange={this.handleChange} /><span>*</span>
                </label>
                <Link to="/Recipe-added"><input type="submit" value="Submit" /></Link>
                </form>
            </div>
        )
    }
}

export default AddRecipeForm

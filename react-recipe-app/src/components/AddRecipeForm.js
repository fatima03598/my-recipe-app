import React, { Component } from 'react';
import {Link, Redirect} from "react-router-dom";
import '../CSS/AddRecipeForm.css';
{/* <input type="submit" value="Submit" /> */}
class AddRecipeForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
           title:null,
           ingridients:null,
           minutes:null,
           serving:null,
           imageURL:'',
           image:'',
           method:null,
           difficulty:'easy',
           redirected:false,
        }};

    handleChange = (event) => {
        const name = event.target.name;
         this.setState({
             [name]: event.target.value
     })
     }
    
     handleUpload = (event) => {
         this.setState({
            image: event.target.files[0],
          },() => console.log(this.state.image) )
          

     }

     postImageUpload = () => {
        const formData = new FormData();
        formData.append('title', this.state.title);
        formData.append('ingridients', this.state.ingridients);
        formData.append('difficulty', this.state.difficulty);
        formData.append('minutes', Math.floor(this.state.minutes));
        formData.append('serving', Math.floor(this.state.serving))
        formData.append('method', this.state.method);
        formData.append('image', this.state.image);

        fetch('/api/recipelandia/upload', {
        method: 'POST',
        body: formData
        })
        .then(response => response.json())
        .then(result => {
            this.setState({
                redirected:true
            })
        })
        .catch(error => {
        console.error('Error:', error);
        });
     }
    handleSubmit = (event) => { 
        const states = Object.values(this.state);
         if(states.includes(null)){
            alert('Please fill all the required fields') 
         } else if (!this.state.image && !this.state.imageURL) {
            alert('Please upload a image or use a url')
         } else if( this.state.image) {
            this.postImageUpload()
            event.preventDefault()
         }
         else {
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
                    this.setState({
                        redirected:true
                    })
                console.log('Success:', data);
                })
                .catch((error) => {
                console.error('Error:', error);
                })
                
                event.preventDefault()  
        };  
        
     }

    render() {
        if (this.state.redirected === true) {
          return( <Redirect to='/Recipe-added' />)
        } 
        return (
            <div className='RecipeForm'>
                <p className='required'> * for required fields</p>
                <form >
                <label>
                <div>
                 Title:
                 <span>*</span>
                 </div>
                    <input type="text" value={this.state.title} name='title' onChange={this.handleChange} />
             
                </label>
                <label>
                <div>
                 Ingredients:
                 <span>*</span>
                 </div>
                    <textarea type="text" value={this.state.ingridients} name='ingridients' onChange={this.handleChange} />
                </label>
                <label>
                <div>
                 How many minutes will it take? :
                 <span>*</span>
                 </div>
                    <span  className='numberCheck'>Please write a number </span> 
                    <input type="number" value={this.state.minutes} name='minutes' onChange={this.handleChange} />
               
                </label>
                <label>
                <div> 
                 How many people will it serve? :
                 <span>*</span>
                 </div>
                    <span className='numberCheck'>Please write a number </span> 
                    <input  type="number" value={this.state.serving} name='serving'  onChange={this.handleChange} />
                </label>
                <label>
                <div>
                 What's the difficulty? :
                 <span>*</span>
                 </div>
              
                    <select value={this.state.difficulty}  name='difficulty' onChange={ this.handleChange}>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                </label>
                <label>
                <div>
                 Image to add of completed result:
                 <span>*</span>
                 </div>
                    <input type="file" name='file'  onChange={this.handleUpload} />
                    or add with url
                    <input type="text" name='imageURL' value={this.state.imageURL} onChange={this.handleChange} />
                 
                </label>
                <label>
                <div>
                 Method:
                 <span>*</span>
                 </div>
                    <textarea type="text"  name='method' value={this.state.method} onChange={this.handleChange} />
                </label>
                <input type="submit"  value='Submit' onClick={this.handleSubmit}/>
                </form>
            </div>
        )
    }
}

export default AddRecipeForm

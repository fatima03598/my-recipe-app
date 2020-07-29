import React, { Component } from 'react';
import {Link} from "react-router-dom";
import '../CSS/SearchBar.css'



class SearchBar extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
           searchTerm:undefined,
           foundItems:undefined,

        }};

    handleChange = (event) => {
        let object = [];
        let titles=[]
       this.setState({
           searchTerm: event.target.value,
           foundItems:[]
       }, () => {
           this.props.location.state.recipes.map(item => {
               let title = item.title.toLowerCase()
               if( title.includes(this.state.searchTerm.toLowerCase())){
                  if(!titles.includes(item.title)) {
                      object.push(item)
                      titles.push(item.title)
                    }
                   this.setState({
                       foundItems: object
                   })
                }}
            )}
        )
    };

  
  

    render() {
     const { searchTerm, foundItems } = this.state;
        return (
            <div className='SearchBar'> 
                <label for='searchTerm' className='searchTerm'>
                    <input type="text" value={searchTerm} name='searchTerm' onChange={this.handleChange} />
                </label>
                <section >
                   {foundItems && foundItems.length >= 1 ? foundItems.map(foundItem => <div key={foundItem.id}  className='found-recipe'>
                                                                                            <Link to={{
                                                                                                    pathname:"/fullRecipe", 
                                                                                                    state: {  recipe: foundItem }
                                                                                                    }}> <h1>{foundItem.title}</h1></Link>
                                                                                          
                                                                                            <img src={foundItem.imageURL}  alt='food'/> 
                                                                                            <h4>Difficulty: {foundItem.difficulty} <br/> 
                                                                                            Duration: {foundItem.minutes} minutes <br/>
                                                                                            Serving: {foundItem.serving}</h4> 
                                                                                       </div>) 
                                                                                       : foundItems === undefined ? 
                                                                                        <h2>Search...</h2> 
                                                                                       : <h2>Sorry, not found. Working on adding more recipes!</h2>}
                </section>
            </div>
        )
    }
}

export default SearchBar

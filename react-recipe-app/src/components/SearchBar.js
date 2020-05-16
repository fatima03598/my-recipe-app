import React, { Component } from 'react'

const breakafter = (string, punctuation) => {
    return string.split(punctuation).join('. \n ') 
   }
   

class SearchBar extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
           searchTerm:undefined,
           foundItems:undefined,

        }};

    handleChange = (event) => {
        console.log(this.state.foundItems)
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
                <label for='searchTerm'>
                 Search:
                    <input type="text" value={searchTerm} name='searchTerm' onChange={this.handleChange} />
                </label>
                <section >
                   {foundItems && foundItems.length >= 1 ? foundItems.map(foundItem => <div key={foundItem.id}  className='found-recipe'>
                                                                                            <h1>{foundItem.title}</h1>
                                                                                            <h3>{breakafter(foundItem.ingridients, ';')}</h3>
                                                                                            <img src={foundItem.imageURL}  alt='food'/> 
                                                                                            <h4>Difficulty: {foundItem.difficulty} <br/> 
                                                                                            Duration: {foundItem.minutes} minutes <br/>
                                                                                            Serving: {foundItem.serving}</h4> 
                                                                                            <p>{breakafter(foundItem.method, '.')}</p>
                                                                                       </div>) 
                                                                                       : foundItems === undefined ? 
                                                                                        <h2>Search...</h2> 
                                                                                       : <h2>not found</h2>}
                </section>
            </div>
        )
    }
}

export default SearchBar

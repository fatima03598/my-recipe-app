import React, { Component } from 'react'

// const breakafter = (string) => {
//     return  string.split(".").join('. \n')
   
//  }
// let notFound = 'unavailable';
// let Found = 'unavailable'
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
              } 
               
           })
       }
       ) 
    }

  
  

    render() {
        console.log(this.props.location.state.titles)
        return (
            <div>
                <label>
                 Search:
                    <input type="text" value={this.state.searchTerm} name='searchTerm' onChange={this.handleChange} />
                </label>
                <section >
                   {this.state.foundItems ? this.state.foundItems.map(foundItem => <div key={foundItem.id}  className='this.state'> <h1>{foundItem.title}</h1><h3>{foundItem.ingridients}</h3><img src={foundItem.imageURL}  alt='food'/> <h4>Difficulty: {foundItem.difficulty} <br/> Duration: {foundItem.minutes} minutes <br/> Serving: {foundItem.serving}</h4> <p>{foundItem.method}</p> </div>) : <h2>Loading Items...</h2>}
                </section>
            </div>
        )
    }
}

export default SearchBar

import React, { Component } from 'react'

class CatList extends Component {

    
    render(){
        // this constant can be written as an arrow function and it doesn't have to be inside render then 
       const cats = this.props.catPics.map(pic => <img src={pic.url} alt=""/>)
       return (
       <div>{cats}</div> 
       )
    }
}

export default CatList
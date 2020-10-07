import React, { Component} from 'react'

class CatList extends Component {

    render(){
        const cats = () => this.props.catPics.map(pic => <img href={pic.url}></img>)
        return(
        <div>HI{cats()}</div>
        )
    }
}

export default CatList
// write your CatList component here
import React, { Component } from 'react'
import { Image } from 'react-bootstrap'

export class CatList extends Component {
    render() {
        const renderCatPics = this.props.catPics.map(cat => <img src={cat.url}></img>)
        
        if ( this.props.loading ){
            return(
                <h1>Loading... *Jeopardy Theme*</h1>
            )
        }
        return (
            <div>
                {renderCatPics}
            </div>
        )
    }
}

export default CatList

// write your CatList component here

import React, { Component } from 'react'

export class CatList extends Component {
    render() {
        let cats = this.props.catPics.map((cat, i) => <img key={i} src={cat.url} alt={cat.url}/>)
        return (
            <div>
                { cats }
            </div>
        )
    }
}

export default CatList

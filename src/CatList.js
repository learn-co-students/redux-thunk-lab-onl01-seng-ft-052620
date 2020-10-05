import React, { Component } from 'react'


export class CatList extends Component {
  render() {
    const catPics = this.props.catPics.map((pic,i) => <img key={i} src={pic.url}></img>)
    return (
      <div>
        {catPics}
      </div>
    )
  }
}

export default CatList

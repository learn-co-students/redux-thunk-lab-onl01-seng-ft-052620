import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCats } from './actions/catActions'
import CatList from './CatList'

class App extends Component {   

  componentDidMount(){
    this.props.fetchCats()
  }

  neverTooLateToRenderCats = () => {
    if (this.props.catPics.length > 0) {
      return < CatList catPics={this.props.catPics} />
    } else {
      return <div>Wait a second, fetching the cats!!!</div>
    }
  }
  
  render() {
    return (
      <div>
        <h1>CatBook</h1>
        {this.neverTooLateToRenderCats()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    catPics: state.cats, 
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
  fetchCats: () => dispatch(fetchCats())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)


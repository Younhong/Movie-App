import React from 'react';
// import React, {Component} from 'react';
// => can extend Component instead of React.Component
import PropTypes from 'prop-types';
import FoodApp from './food';

class App extends React.Component{
  state = {
    count: 0
  }
  render(){
    return <h1>I am who I am {this.state.count}</h1>
  }
}

export default App;
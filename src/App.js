import React from 'react';
// import React, {Component} from 'react';
// => can extend Component instead of React.Component
import PropTypes from 'prop-types';

class App extends React.Component{
  state = {
    count: 0
  };
  add = () => {
    this.setState(current => ({
      count: current.count + 1
    }));
  };
  minus = () => {
    if (this.state.count === 0) {
      this.setState(current => ({
        count: 0
      }));
    } else {
      this.setState(current => ({
        count: current.count - 1
      }));      
    }
  };
  // changing state will re-render every time
  render(){
    return (
      <div>
        <h1>I am who I am</h1>
        <h1>Start Counting {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  }
}

export default App;
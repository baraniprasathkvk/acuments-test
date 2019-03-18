import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>$100000</h1>
        <button type="button" className="btn btn-success">Credit 10000</button>
        <button type="button" className="btn btn-danger">Debit 10000</button>
        <button type="button" className="btn btn-warning">To Charity</button>
      </div>
    );
  }
}

export default App;

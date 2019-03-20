import React from 'react';
import './App.css';

class Counter extends React.Component {
  state = {count: 0};

  credit = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  debit = () => {
    if (this.state.count > 0) {
      this.setState({
      count: this.state.count - 1
    });
    }
    else {
      alert("Cannot Debit. Your Balance is 0!");
    }
  };

  donate = () => {
    if (this.state.count > 0) {
      this.setState({
      count: this.state.count - this.state.count
    });
    }
    else {
      alert("Cannot Donate. Your Balance is 0!");
    }
  }

  render() {
    return (
      <div className="counter">
        <h1 className="count">{this.state.count}</h1>
        <button type="button" className="btn btn-success" onClick={this.credit}>Credit 10000</button>
        <button type="button" className="btn btn-danger" onClick={this.debit}>Debit 10000</button>
        <button type="button" className="btn btn-warning" onClick={this.donate}>To Charity</button>
      </div>
    );
  }
}

export default Counter;

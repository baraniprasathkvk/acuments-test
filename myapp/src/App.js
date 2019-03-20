import React from 'react';
import { connect } from 'react-redux';
import './App.css';

class Counter extends React.Component {

  credit = () => {
    this.props.dispatch({type: "CREDIT"});
  };

  debit = () => {
    this.props.dispatch({type: "DEBIT"});    
  };

  donate = () => {
    this.props.dispatch({type: "DONATE"});        
  };



  render() {
    return (
      <div className="counter">
        <h1 className="count" id="balance" /*onChange={this.checkCount().bind(this)}*/>{this.props.count}</h1>
        <button type="button" className="btn btn-success" onClick={this.credit}>Credit $10000</button>
        <button type="button" id="debit" className="btn btn-danger" onClick={this.debit}>Debit $10000</button>
        <button type="button" id="donate" className="btn btn-warning" onClick={this.donate}>To Charity</button>
      </div>
 // {document.getElementById("balance").addEventListener = function(){this.checkCount()}}
    );
  }
  // checkCount = () => {
  //   var debit = document.getElementById('debit');
  //  // var donate = document.getElementById('donate');
  //   return debit.setAttribute("disabled","");
  // };
}

const mapStateToProps = (state) => ({
    count: state.count
})
export default connect(mapStateToProps)(Counter);

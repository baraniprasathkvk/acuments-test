import React from 'react';
import { connect } from 'react-redux';
import './App.css';

class Balance extends React.Component {

  credit = () => {
    this.props.dispatch({type: "CREDIT"});
  };

  debit = () => {
    this.props.dispatch({type: "DEBIT"});    
  };

  donate = () => {
    this.props.dispatch({type: "DONATE"});        
  };

  empty = () => {
    setInterval( function(){
      var debit = document.getElementById("debit");
      var a = document.getElementById("balance").innerHTML;
      var length = a.length;
      if (length === 1) {
        debit.disabled =true;
      }
      else {
        debit.disabled = false;
      }
      }
      ,50);
    }
    // tooltip = () => {
    //   this.$el = $('#button').tooltip('hide');
    // }

  render() {
    return (
      <div className="balance" onLoad={this.empty()}>
        <h1 className="count" id="balance" /*onChange={this.checkCount().bind(this)}*/>{this.props.count}</h1>
        <button type="button" className="btn btn-success" onClick={this.credit}>Credit $10000</button>
        <button type="button" id="debit" className="btn btn-danger" onClick={this.debit} data-toggle="tooltip" data-placement="top" title="You cannot reduce the money from 0 balance" >Debit $10000</button>
        <button type="button" id="donate" className="btn btn-warning" onClick={this.donate}>To Charity</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    count: state.count
})
export default connect(mapStateToProps)(Balance);

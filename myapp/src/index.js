import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import Balance from './App';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

const initialState = {
	count: 100000
};

const store = createStore(reducer, applyMiddleware(thunk));
const App = () => (
	<Provider store={store}>
		<Balance />
	</Provider>
	);

function reducer(state = initialState, action) {
	switch(action.type){
		case "CREDIT":  
			return {
				count: state.count + 10000
			}
		case "DEBIT":
				return { 
				count: state.count - 10000
			}
		case "DONATE":
				return {
				count: state.count - state.count
			}		
		default:
			return state;
	}
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

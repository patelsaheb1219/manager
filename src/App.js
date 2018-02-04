import React , { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore , applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
	componentWillMount() {
		// Initialize Firebase
		const config = {
		    apiKey: 'AIzaSyALWXp1yCk6ijiouxQiZTcPfzIG2SX8iSA',
		    authDomain: 'manager-37173.firebaseapp.com',
		    databaseURL: 'https://manager-37173.firebaseio.com',
		    projectId: 'manager-37173',
		    storageBucket: 'manager-37173.appspot.com',
		    messagingSenderId: '238053854267'
  		};
  		firebase.initializeApp(config);
	}

	render() {
		const store = createStore(reducers , {} , applyMiddleware(ReduxThunk))

		return(
			<Provider store={store}>
				<Router /> 
			</Provider>
		);
	}
}

export default App;
import React,{Component} from 'react';
import './App.css';
import { withNamespaces } from 'react-i18next';
import Main from './containers/Main/Main.jsx';
import { storeDataToSessionStorage } from './api/session_storage.js';
import {Switch, Route} from 'react-router-dom'
class App extends Component {

	render() {

	storeDataToSessionStorage();

	return (
		<div>
			<Switch>
				<Route path="/" component={Main}/>
			</Switch>
		</div>
	)}
}

export default withNamespaces()(App);

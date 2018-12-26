import React, { Component } from 'react';
import CommentList from './components/CommentList'
import CommentForm from './components/CommentForm'
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>コメント</h1>
				<CommentList />
				<CommentForm />
			</div>
		);
	}
}

export default App;

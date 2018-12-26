import React, { Component } from 'react';
import CommentList from './components/CommentList'
import CommentForm from './components/CommentForm'
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {data: []};
	}
	async componentDidMount() {
		const url = 'comments.json';
		try {
			const jsonData = 
				await (
					await fetch(url)
				).json();
			this.setState({data: jsonData});
		} catch (error) {
			console.error('エラー:', error);
		}	
	}
	render() {
		return (
			<div className="App">
				<h1>コメント</h1>
				<CommentList data={this.state.data} />
				<CommentForm />
			</div>
		);
	}
}

export default App;

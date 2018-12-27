import React, { Component } from 'react';
import CommentList from './components/CommentList';
import CommentForm from './components/CommentForm';
import commentStorage from './components/commentStorage';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{"author": "ヘンリー・キッシンジャー", "text": "チャンスは__貯金__できない。"},
				{"author": "マーク・トウェイン", "text": "禁煙なんてたやすい。私は*何千回*もやった。"}
			]
		};
	}
	async componentDidMount() {
		/* const url = 'comments.json';
		try {
			const jsonData = 
				await (
					await fetch(url)
				).json();
			this.setState({data: jsonData});
		} catch (error) {
			console.error('エラー:', error);
		} */
		// this.setState({data: commentStorage.fetch()});
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

import React, { Component } from 'react';
import CommentList from './components/CommentList'
import CommentForm from './components/CommentForm'
import './App.css';

class App extends Component {
	data = [
		{author: "ヘンリー・キッシンジャー", text: "チャンスは__貯金__できない。"},
		{author: "マーク・トウェイン", text: "禁煙なんてたやすい。私は*何千回*もやった。"}
	];
	render() {
		return (
			<div className="App">
				<h1>コメント</h1>
				<CommentList data={this.data} />
				<CommentForm />
			</div>
		);
	}
}

export default App;

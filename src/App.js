import React, { Component } from 'react';
import CommentList from './components/CommentList';
import CommentForm from './components/CommentForm';
import commentStorage from './components/commentStorage';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {data: []};
		this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
	}
	async componentDidMount() {
		commentStorage.save([
			{"author": "ヘンリー・キッシンジャー", "text": "チャンスは__貯金__できない。"},
			{"author": "マーク・トウェイン", "text": "禁煙なんてたやすい。私は*何千回*もやった。"}
		]);
		this.setState({data: commentStorage.fetch()});
	}
	handleCommentSubmit(comment) {
		console.log(comment);  // 確認用
		const data = this.state.data;
		data.push(comment);
		this.setState({data: data});
		commentStorage.save(data);
	}
	render() {
		return (
			<div className="App">
				<h1>コメント</h1>
				<CommentList data={this.state.data} />
				<CommentForm onCommentSubmit={this.handleCommentSubmit} />
			</div>
		);
	}
}

export default App;

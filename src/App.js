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
		this.removeComment = this.removeComment.bind(this);
	}
	async componentDidMount() {
		this.setState({data: commentStorage.fetch()});
	}
	handleCommentSubmit(comment) {
		const data = this.state.data;
		data.push(comment);
		this.setState({data: data});
		commentStorage.save(data);
	}
	removeComment(commntId) {
		const data = this.state.data.filter((comment) => comment.id != commntId);
		this.setState({data: data});
		commentStorage.save(data);
	}
	render() {
		return (
			<div className="App">
				<h1>コメント</h1>
				<CommentList data={this.state.data} onRemoveComment={this.removeComment} />
				<CommentForm onCommentSubmit={this.handleCommentSubmit} />
			</div>
		);
	}
}

export default App;

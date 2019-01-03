import React, { Component } from 'react';
import CommentList from './components/CommentList';
import CommentForm from './components/CommentForm';
import CommentStorage from './components/CommentStorage';
import styled from 'styled-components'

const CommentBox = styled.div`
	margin-left: 20px;
`;

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {data: []};
		this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
		this.removeComment = this.removeComment.bind(this);
	}
	async componentDidMount() {
		this.setState({data: CommentStorage.fetch()});
	}
	handleCommentSubmit(comment) {
		const data = [...this.state.data, comment];
		this.setState({data: data});
		CommentStorage.save(data);
	}
	removeComment(commntId) {
		console.log(commntId);
		const data = this.state.data.filter((comment) => comment.id !== commntId);
		this.setState({data: data});
		CommentStorage.save(data);
	}
	render() {
		return (
			<CommentBox>
				<h1>コメント</h1>
				<CommentList data={this.state.data} onRemoveComment={this.removeComment} />
				<CommentForm onCommentSubmit={this.handleCommentSubmit} />
			</CommentBox>
		);
	}
}

export default App;

import React, { Component } from 'react';
import Comment from './Comment';
import './CommentList.css';

class CommentList extends Component {
	constructor(props) {
		super(props);
		this.removeComment = this.removeComment.bind(this);
	}
	removeComment(commentId) {
		this.props.onRemoveComment(commentId);
	}
	render() {
		const commentNodes = this.props.data.map((comment, id) =>
			(
				<Comment
					author={comment.author}
					key={id}
					id={comment.id}
					onRemoveComment={this.removeComment}
				>
				{comment.text}
				</Comment>
			)
		);
		return (
			<div className="CommentList">
			{commentNodes}
			</div>
		);
	}
}

export default CommentList;

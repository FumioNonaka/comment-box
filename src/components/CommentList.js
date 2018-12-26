import React, { Component } from 'react';
import Comment from './Comment';

class CommentList extends Component {
	render() {
		const commentNodes = this.props.data.map((comment, id) =>
			(
				<Comment author={comment.author} key={id}>
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

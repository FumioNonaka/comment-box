import React, { Component } from 'react';
import Comment from './Comment';
import styled from 'styled-components'

const CommentListContainer = styled.div`
	margin-bottom: 10px;
`;

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
			<CommentListContainer>
			{commentNodes}
			</CommentListContainer>
		);
	}
}

export default CommentList;

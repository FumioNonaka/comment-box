import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
					key={comment.id}
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
CommentList.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			author: PropTypes.string.isRequired,
			text: PropTypes.string.isRequired,
			id: PropTypes.number
		})
	),
	onRemoveComment: PropTypes.func.isRequired
}

export default CommentList;

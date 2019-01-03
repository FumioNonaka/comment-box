import React, { Component } from 'react';
import Remarkable from 'remarkable';
import styled from 'styled-components'

const CommentContainer = styled.div`
	margin-bottom: 10px;
	font-size: 16px;
	& span {
		display: inline-block;
	}
	& button {
		display: inline-block;
	}
`;
const CommentAuthor = styled.h2`
	margin: 0;
`;

class Comment extends Component {
	constructor(props) {
		super(props);
		this.remove = this.remove.bind(this);
	}
    rawMarkup() {
        const markDown = new Remarkable();
        const rawMarkup = markDown.render(this.props.children.toString());
        return { __html: rawMarkup };
	}
	remove(event) {
		this.props.onRemoveComment(this.props.id);
	}
	render() {
		return (
			<CommentContainer>
				<CommentAuthor>
				{this.props.author}
				</CommentAuthor>
                <span dangerouslySetInnerHTML={this.rawMarkup()} />
				<button onClick={this.remove}>X</button>
			</CommentContainer>
		);
	}
}

export default Comment;

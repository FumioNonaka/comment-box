import React, { Component } from 'react';
import CommentStorage from './CommentStorage';
import styled from 'styled-components'

const CommentFormContainer = styled.form`
	margin-top: 20px;
	& input {
		font-size: 12px;
	}
`;

class CommentForm extends Component {
	constructor(props) {
		super(props);
		this.state = {author: '', text: ''};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(eventObject) {
		const input = eventObject.target;
		const state = {};
		state[input.id] = input.value;
		this.setState(state);
	}
	handleSubmit(eventObject) {
		eventObject.preventDefault();
		const author = this.state.author.trim();
		const text = this.state.text.trim();
		if (!author || !text) {
			this.setState({author: author, text: text});
			return;
		}
		this.props.onCommentSubmit({author: author, text: text, id: CommentStorage.uid++});
		this.setState({author: '', text: ''});
	}
	render() {
		return (
			<CommentFormContainer onSubmit={this.handleSubmit}>
				<input
					id="author"
					type="text"
					placeholder="名前"
					value={this.state.author}
					onChange={this.handleChange}
				/>
				<input
					id="text"
					type="text"
					placeholder="コメントを入力"
					value={this.state.text}
					onChange={this.handleChange}
				/>
				<input type="submit" value="送信" />
			</CommentFormContainer>
		);
	}
}

export default CommentForm;

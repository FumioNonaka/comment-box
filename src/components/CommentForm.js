import React, { Component } from 'react';

class CommentForm extends Component {
	constructor(props) {
		super(props);
		this.state = {author: '', text: ''};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleAuthorChange = this.handleAuthorChange.bind(this);
		this.handleTextChange = this.handleTextChange.bind(this);
	}
	handleAuthorChange(eventObject) {
		this.setState({author: eventObject.target.value});
	}
	handleTextChange(eventObject) {
		this.setState({text: eventObject.target.value});
	}
	handleSubmit(eventObject) {
		eventObject.preventDefault();
		const author = this.state.author;
		const text = this.state.text;
		console.log(author, text);  // 確認用
		this.setState({author: '', text: ''});
	}
	render() {
		return (
			<form className="CommentForm"  onSubmit={this.handleSubmit}>
				<input
					type="text"
					placeholder="名前"
					value={this.state.author}
					onChange={this.handleAuthorChange}
				/>
				<input
					type="text"
					placeholder="コメントを入力"
					value={this.state.text}
					onChange={this.handleTextChange}
				/>
				<input type="submit" value="送信" />
			</form>
		);
	}
}

export default CommentForm;

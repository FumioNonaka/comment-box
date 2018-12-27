import React, { Component } from 'react';
import Remarkable from 'remarkable';

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
			<div className="Comment">
				<h2 className="commentAuthor">
				{this.props.author}
				</h2>
                <span dangerouslySetInnerHTML={this.rawMarkup()} />
				<button onClick={this.remove}>X</button>
			</div>
		);
	}
}

export default Comment;

import React, { Component } from 'react';
import Comment from './Comment';

class CommentList extends Component {
	render() {
		return (
			<div className="CommentList">
				<Comment author="ヘンリー・キッシンジャー">チャンスは貯金できない。</Comment>
				<Comment author="マーク・トウェイン">禁煙なんてたやすい。私は何千回もやった。</Comment>
			</div>
		);
	}
}

export default CommentList;

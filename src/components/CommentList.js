import React, { Component } from 'react';
import Comment from './Comment';

class CommentList extends Component {
	render() {
		return (
			<div className="CommentList">
				<Comment author="ヘンリー・キッシンジャー">チャンスは__貯金__できない。</Comment>
				<Comment author="マーク・トウェイン">禁煙なんてたやすい。私は*何千回*もやった。</Comment>
			</div>
		);
	}
}

export default CommentList;

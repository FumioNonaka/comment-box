const STORAGE_KEY = 'comments-react-16.7';
const commentStorage = {
	fetch() {
		// const
		let comments = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
		comments.forEach(function(comment, index) {
			comment.id = index;
		});
		commentStorage.uid = comments.length;
		/* comments = (comments.length) ? comments : [
			{"author": "ヘンリー・キッシンジャー", "text": "チャンスは__貯金__できない。"},
			{"author": "マーク・トウェイン", "text": "禁煙なんてたやすい。私は*何千回*もやった。"}
		]; */
		return comments;
	},
	save(comments) {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(comments));
	}
};

export default commentStorage;

class CommentStorage {
	static get STORAGE_KEY() {
		return 'comments-react-16.7';
	}
	static fetch() {
		const comments = JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '[]');
		comments.forEach(function(comment, index) {
			comment.id = index;
		});
		this.uid = comments.length;
		return comments;
	}
	static save(comments) {
		localStorage.setItem(this.STORAGE_KEY, JSON.stringify(comments));
	}
};
// CommentStorage.STORAGE_KEY = 'comments-react-16.7';
CommentStorage.uid = 0;

export default CommentStorage;

const STORAGE_KEY = 'comments-react-16.7';
const commentStorage = {
	fetch() {
		const comments = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
		comments.forEach(function(comment, index) {
			comment.id = index;
		});
		commentStorage.uid = comments.length;
		return comments;
	},
	save(comments) {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(comments));
	}
};

export default commentStorage;

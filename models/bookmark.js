const bookmark = (sequalize, DataTypes) => {
	const Bookmark = sequalize.define('bookmark', {
		url: {
			type: DataTypes.STRING(60)
		}
	}, {
		timestamps: false
	});

	return Bookmark;
}

module.exports = bookmark;

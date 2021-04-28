const express = require('express');
const router = express.Router();

const Bookmark = require('../models').Bookmark;



router.get('/', async (req, res) => {
	const bookmarks = await Bookmark.findAll();
	res.render('index.ejs', { bookmarks: bookmarks });
})

// const deleteController = router.use('/', async (req, res, next) => {
// 	if(req.body.urlToDelete) {
// 		await Bookmark.destroy({
// 			where: {
// 				url: req.body.urlToDelete
// 			}
// 		})
// 		res.redirect('/bookmarks');
// 	}
// 	next();
// })

router.post('/', async (req, res) => {
	if(req.body.urlToDelete) {
		await Bookmark.destroy({
			where: {
				url: req.body.urlToDelete
			}
		})
	} else if(req.body.updateBookmarkId) {
		await Bookmark.update({ url: req.body.updateUrl }, {
			where: {
				id: req.body.updateBookmarkId
			}
		})
	} else {
		await Bookmark.create({
			url: req.body.addBookmark,
			createdAt: new Date(),
			updatedAt: new Date()
		})
	}
	res.redirect('/bookmarks');
})


module.exports = router;
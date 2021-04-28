const express = require('express');
const app = express();
const port = 3000;

app.set('views', 'views');
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

const indexController = require('./controllers/index');

app.use('/bookmarks', indexController);

app.listen(process.env.PORT || port, () => {
	console.log(`Rock, paper, scissors app listening at http://localhost:${port}`);
})
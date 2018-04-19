var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', {
		title: 'Express'
	});
});
/* GET home page. */
router.get('/read', function (req, res, next) {
	res.render('read', {
		title: '123'
	})
});


module.exports = router;
